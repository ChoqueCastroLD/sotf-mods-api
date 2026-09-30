/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Template_Not_A_ModInputs */

const en_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This upload is not a Sons of the Forest mod or build.`)
};

const es_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta subida no es un mod ni una build de Sons of the Forest.`)
};

const de_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Upload ist kein Mod und kein Build für Sons of the Forest.`)
};

const fr_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cet envoi n’est ni un mod ni un build de Sons of the Forest.`)
};

const it_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo caricamento non è una mod né una build di Sons of the Forest.`)
};

const nl_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze upload is geen mod of build voor Sons of the Forest.`)
};

const pl_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To przesłanie nie jest modem ani buildem do Sons of the Forest.`)
};

const pt_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este envio não é um mod nem uma build de Sons of the Forest.`)
};

const ru_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Эта загрузка не является модом или постройкой для Sons of the Forest.`)
};

const sv_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här uppladdningen är varken en modd eller ett bygge för Sons of the Forest.`)
};

const tr_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yükleme bir Sons of the Forest modu ya da yapısı değil.`)
};

const zh_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此上传不是 Sons of the Forest 的模组或建筑。`)
};

const ja_ranger_template_not_a_mod = /** @type {(inputs: Ranger_Template_Not_A_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このアップロードは Sons of the Forest のMODでも建築でもありません。`)
};

/**
* | output |
* | --- |
* | "This upload is not a Sons of the Forest mod or build." |
*
* @param {Ranger_Template_Not_A_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_template_not_a_mod = /** @type {((inputs?: Ranger_Template_Not_A_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Not_A_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_template_not_a_mod(inputs)
	if (locale === "de") return de_ranger_template_not_a_mod(inputs)
	if (locale === "fr") return fr_ranger_template_not_a_mod(inputs)
	if (locale === "it") return it_ranger_template_not_a_mod(inputs)
	if (locale === "nl") return nl_ranger_template_not_a_mod(inputs)
	if (locale === "pl") return pl_ranger_template_not_a_mod(inputs)
	if (locale === "pt") return pt_ranger_template_not_a_mod(inputs)
	if (locale === "ru") return ru_ranger_template_not_a_mod(inputs)
	if (locale === "sv") return sv_ranger_template_not_a_mod(inputs)
	if (locale === "tr") return tr_ranger_template_not_a_mod(inputs)
	if (locale === "zh") return zh_ranger_template_not_a_mod(inputs)
	if (locale === "ja") return ja_ranger_template_not_a_mod(inputs)
	return en_ranger_template_not_a_mod(inputs)
});
