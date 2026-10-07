/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown> }} Jams_Results_Not_ReadyInputs */

const en_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Results can be computed once the jam reaches the ${i?.phase} phase.`)
};

const es_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los resultados se pueden calcular cuando el jam llegue a la fase «${i?.phase}».`)
};

const de_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Die Ergebnisse lassen sich berechnen, sobald der Jam die Phase „${i?.phase}“ erreicht.`)
};

const fr_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les résultats peuvent être calculés une fois le jam arrivé à la phase « ${i?.phase} ».`)
};

const it_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I risultati si possono calcolare quando il jam arriva alla fase «${i?.phase}».`)
};

const nl_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`De resultaten kunnen worden berekend zodra de jam de fase ${i?.phase} bereikt.`)
};

const pl_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyniki można policzyć, gdy jam osiągnie fazę „${i?.phase}”.`)
};

const pt_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Os resultados podem ser calculados quando a jam chegar à fase «${i?.phase}».`)
};

const ru_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Итоги можно подсчитать, когда джем перейдёт в фазу «${i?.phase}».`)
};

const sv_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Resultaten kan räknas fram när jammen når fasen ${i?.phase}.`)
};

const tr_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam “${i?.phase}” aşamasına geldiğinde sonuçlar hesaplanabilir.`)
};

const zh_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam 进入“${i?.phase}”阶段后即可计算结果。`)
};

const ja_jams_results_not_ready = /** @type {(inputs: Jams_Results_Not_ReadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ジャムが「${i?.phase}」のフェーズになると、結果を集計できます。`)
};

/**
* | output |
* | --- |
* | "Results can be computed once the jam reaches the {phase} phase." |
*
* @param {Jams_Results_Not_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_not_ready = /** @type {((inputs: Jams_Results_Not_ReadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Not_ReadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_not_ready(inputs)
	if (locale === "de") return de_jams_results_not_ready(inputs)
	if (locale === "fr") return fr_jams_results_not_ready(inputs)
	if (locale === "it") return it_jams_results_not_ready(inputs)
	if (locale === "nl") return nl_jams_results_not_ready(inputs)
	if (locale === "pl") return pl_jams_results_not_ready(inputs)
	if (locale === "pt") return pt_jams_results_not_ready(inputs)
	if (locale === "ru") return ru_jams_results_not_ready(inputs)
	if (locale === "sv") return sv_jams_results_not_ready(inputs)
	if (locale === "tr") return tr_jams_results_not_ready(inputs)
	if (locale === "zh") return zh_jams_results_not_ready(inputs)
	if (locale === "ja") return ja_jams_results_not_ready(inputs)
	return en_jams_results_not_ready(inputs)
});
