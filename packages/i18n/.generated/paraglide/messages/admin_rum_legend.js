/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ samples: NonNullable<unknown> }} Admin_Rum_LegendInputs */

const en_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Green: good · amber: needs improvement · red: poor (Core Web Vitals thresholds). “few”: under ${i?.samples} samples, read with care.`)
};

const es_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verde: bueno · ámbar: mejorable · rojo: deficiente (umbrales de Core Web Vitals). «pocas»: menos de ${i?.samples} muestras, tómalo con cautela.`)
};

const de_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grün: gut · Gelb: verbesserungswürdig · Rot: schlecht (Grenzwerte der Core Web Vitals). „wenige“: unter ${i?.samples} Messungen, mit Vorsicht lesen.`)
};

const fr_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vert : bon · ambre : à améliorer · rouge : médiocre (seuils Core Web Vitals). « peu » : moins de ${i?.samples} mesures, à lire avec prudence.`)
};

const it_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verde: buono · ambra: da migliorare · rosso: scarso (soglie dei Core Web Vitals). «poche»: meno di ${i?.samples} misurazioni, da leggere con cautela.`)
};

const nl_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Groen: goed · oranje: kan beter · rood: slecht (drempels van Core Web Vitals). ‘weinig’: minder dan ${i?.samples} metingen, voorzichtig lezen.`)
};

const pl_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zielony: dobrze · bursztynowy: do poprawy · czerwony: słabo (progi Core Web Vitals). „mało”: poniżej ${i?.samples} pomiarów, czytaj ostrożnie.`)
};

const pt_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verde: bom · âmbar: precisa melhorar · vermelho: ruim (limites dos Core Web Vitals). “poucas”: menos de ${i?.samples} medições, leia com cautela.`)
};

const ru_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Зелёный: хорошо · янтарный: нужно улучшить · красный: плохо (пороги Core Web Vitals). «мало»: меньше ${i?.samples} замеров, оценивайте осторожно.`)
};

const sv_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Grönt: bra · bärnsten: behöver förbättras · rött: dåligt (gränsvärden för Core Web Vitals). ”få”: under ${i?.samples} mätningar, läs med försiktighet.`)
};

const tr_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Yeşil: iyi · kehribar: iyileştirilmeli · kırmızı: zayıf (Core Web Vitals eşikleri). “az”: ${i?.samples} ölçümün altında, dikkatle oku.`)
};

const zh_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`绿色：良好 · 琥珀色：需改进 · 红色：较差（Core Web Vitals 阈值）。“样本少”：少于 ${i?.samples} 个样本，请谨慎解读。`)
};

const ja_admin_rum_legend = /** @type {(inputs: Admin_Rum_LegendInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`緑：良好 · 琥珀色：要改善 · 赤：不良（Core Web Vitals のしきい値）。「少数」：サンプルが ${i?.samples} 未満のため、慎重に判断してください。`)
};

/**
* | output |
* | --- |
* | "Green: good · amber: needs improvement · red: poor (Core Web Vitals thresholds). “few”: under {samples} samples, read with care." |
*
* @param {Admin_Rum_LegendInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_legend = /** @type {((inputs: Admin_Rum_LegendInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_LegendInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_legend(inputs)
	if (locale === "de") return de_admin_rum_legend(inputs)
	if (locale === "fr") return fr_admin_rum_legend(inputs)
	if (locale === "it") return it_admin_rum_legend(inputs)
	if (locale === "nl") return nl_admin_rum_legend(inputs)
	if (locale === "pl") return pl_admin_rum_legend(inputs)
	if (locale === "pt") return pt_admin_rum_legend(inputs)
	if (locale === "ru") return ru_admin_rum_legend(inputs)
	if (locale === "sv") return sv_admin_rum_legend(inputs)
	if (locale === "tr") return tr_admin_rum_legend(inputs)
	if (locale === "zh") return zh_admin_rum_legend(inputs)
	if (locale === "ja") return ja_admin_rum_legend(inputs)
	return en_admin_rum_legend(inputs)
});
