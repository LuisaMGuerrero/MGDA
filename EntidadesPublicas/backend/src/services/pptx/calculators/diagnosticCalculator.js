/**
 * Calculadora de diagnóstico documental
 * Lógica de cálculo separada y reutilizable
 */

export class DiagnosticCalculator {
  
  constructor(surveyData) {
    this.data = surveyData;
  }
  
  /**
   * Calcular cumplimiento por prefijo de pregunta
   */
  calculateByPrefix(prefix) {
    let cumple = 0, parcial = 0, noCumple = 0, total = 0;
    
    Object.keys(this.data).forEach(key => {
      if (key.startsWith(prefix) && 
          !key.includes('_detail') && 
          !key.includes('_obs') && 
          !key.includes('_info') &&
          key.match(/^\d+_\d+_\d+$/)) {
        total++;
        if (this.data[key] === 'Cumple') cumple++;
        else if (this.data[key] === 'Parcial') parcial++;
        else if (this.data[key] === 'No cumple') noCumple++;
      }
    });
    
    const porcentaje = total > 0 
      ? ((cumple + parcial * 0.5) / total * 100).toFixed(1) 
      : 0;
    
    return { 
      cumple, 
      parcial, 
      noCumple, 
      total, 
      porcentaje: parseFloat(porcentaje) 
    };
  }
  
  /**
   * Calcular aspectos administrativos (preguntas 1-4)
   */
  calculateAdministrative() {
    const results = [];
    for (let i = 1; i <= 4; i++) {
      results.push(this.calculateByPrefix(`${i}_`));
    }
    return this.mergeResults(results);
  }
  
  /**
   * Calcular función archivística (preguntas 5-7)
   */
  calculateArchivalFunction() {
    const results = [];
    for (let i = 5; i <= 7; i++) {
      results.push(this.calculateByPrefix(`${i}_`));
    }
    return this.mergeResults(results);
  }
  
  /**
   * Calcular preservación (pregunta 8)
   */
  calculatePreservation() {
    return this.calculateByPrefix('8_');
  }
  
  /**
   * Calcular cumplimiento global
   */
  calculateGlobal() {
    const admin = this.calculateAdministrative();
    const func = this.calculateArchivalFunction();
    const pres = this.calculatePreservation();
    
    const totalCumple = admin.cumple + func.cumple + pres.cumple;
    const totalParcial = admin.parcial + func.parcial + pres.parcial;
    const totalNoCumple = admin.noCumple + func.noCumple + pres.noCumple;
    const totalItems = admin.total + func.total + pres.total;
    
    const porcentaje = totalItems > 0
      ? ((totalCumple + totalParcial * 0.5) / totalItems * 100).toFixed(1)
      : 0;
    
    return {
      cumple: totalCumple,
      parcial: totalParcial,
      noCumple: totalNoCumple,
      total: totalItems,
      porcentaje: parseFloat(porcentaje),
      bySection: { admin, func, pres }
    };
  }
  
  /**
   * Merge múltiples resultados
   */
  mergeResults(results) {
    const merged = results.reduce((acc, curr) => ({
      cumple: acc.cumple + curr.cumple,
      parcial: acc.parcial + curr.parcial,
      noCumple: acc.noCumple + curr.noCumple,
      total: acc.total + curr.total
    }), { cumple: 0, parcial: 0, noCumple: 0, total: 0 });
    
    const porcentaje = merged.total > 0
      ? ((merged.cumple + merged.parcial * 0.5) / merged.total * 100).toFixed(1)
      : 0;
    
    return {
      ...merged,
      porcentaje: parseFloat(porcentaje)
    };
  }
  
  /**
   * Extraer observaciones por sección
   */
  getObservationsBySection(sectionPrefix) {
    const observations = [];
    const keys = Object.keys(this.data).sort();
    
    keys.forEach(key => {
      if (key.startsWith(sectionPrefix) && key.includes('_obs') && this.data[key]) {
        const obs = this.data[key].trim();
        if (obs) {
          observations.push(obs);
        }
      }
    });
    
    return observations;
  }
  
  /**
   * Generar hallazgos textuales por sección
   */
  generateFindingsBySection(sectionPrefix, sectionName) {
    const findings = [];
    const keys = Object.keys(this.data).sort();
    
    keys.forEach(key => {
      if (key.startsWith(sectionPrefix) && 
          key.match(/^\d+_\d+_\d+$/) &&
          this.data[key]) {
        
        const value = this.data[key];
        const obsKey = `${key}_obs`;
        const observation = this.data[obsKey];
        
        if (value === 'No cumple' || value === 'Parcial') {
          let finding = `Aspecto ${key}: ${value}`;
          if (observation) {
            finding += ` - ${observation}`;
          }
          findings.push(finding);
        }
      }
    });
    
    return findings;
  }
}
