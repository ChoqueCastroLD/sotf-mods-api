/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Template_Not_A_ModInputs */

const en_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This upload is not a Sons of the Forest mod or build.`)
};

const es_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta subida no es un mod ni una build de Sons of the Forest.`)
};

const de_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Upload ist kein Mod und kein Build für Sons of the Forest.`)
};

const fr_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet envoi n’est ni un mod ni un build de Sons of the Forest.`)
};

const it_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo caricamento non è una mod né una build di Sons of the Forest.`)
};

const nl_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze upload is geen mod of build voor Sons of the Forest.`)
};

const pl_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To przesłanie nie jest modem ani buildem do Sons of the Forest.`)
};

const pt_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este envio não é um mod nem uma build de Sons of the Forest.`)
};

const ru_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта загрузка не является модом или постройкой для Sons of the Forest.`)
};

const sv_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här uppladdningen är varken en modd eller ett bygge för Sons of the Forest.`)
};

const tr_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yükleme bir Sons of the Forest modu ya da yapısı değil.`)
};

const zh_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此上传不是 Sons of the Forest 的模组或建筑。`)
};

const ja_signals_template_not_a_mod = /** @type {(inputs: Signals_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアップロードは Sons of the Forest のMODでも建築でもありません。`)
};

/**
* | output |
* | --- |
* | "This upload is not a Sons of the Forest mod or build." |
*
* @param {Signals_Template_Not_A_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_template_not_a_mod = /** @type {((inputs?: Signals_Template_Not_A_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Not_A_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_template_not_a_mod(inputs)
	if (locale === "de") return de_signals_template_not_a_mod(inputs)
	if (locale === "fr") return fr_signals_template_not_a_mod(inputs)
	if (locale === "it") return it_signals_template_not_a_mod(inputs)
	if (locale === "nl") return nl_signals_template_not_a_mod(inputs)
	if (locale === "pl") return pl_signals_template_not_a_mod(inputs)
	if (locale === "pt") return pt_signals_template_not_a_mod(inputs)
	if (locale === "ru") return ru_signals_template_not_a_mod(inputs)
	if (locale === "sv") return sv_signals_template_not_a_mod(inputs)
	if (locale === "tr") return tr_signals_template_not_a_mod(inputs)
	if (locale === "zh") return zh_signals_template_not_a_mod(inputs)
	if (locale === "ja") return ja_signals_template_not_a_mod(inputs)
	return en_signals_template_not_a_mod(inputs)
});
