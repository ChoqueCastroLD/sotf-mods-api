/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Start_TitleInputs */

const en_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Start in three steps`)
};

const es_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Empieza en tres pasos`)
};

const de_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In drei Schritten loslegen`)
};

const fr_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commencez en trois étapes`)
};

const it_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inizia in tre passi`)
};

const nl_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begin in drie stappen`)
};

const pl_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zacznij w trzech krokach`)
};

const pt_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comece em três passos`)
};

const ru_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Начните за три шага`)
};

const sv_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kom igång i tre steg`)
};

const tr_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üç adımda başla`)
};

const zh_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`三步开始`)
};

const ja_manager_start_title = /** @type {(inputs: Manager_Start_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`3 ステップで開始`)
};

/**
* | output |
* | --- |
* | "Start in three steps" |
*
* @param {Manager_Start_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_start_title = /** @type {((inputs?: Manager_Start_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Start_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_start_title(inputs)
	if (locale === "de") return de_manager_start_title(inputs)
	if (locale === "fr") return fr_manager_start_title(inputs)
	if (locale === "it") return it_manager_start_title(inputs)
	if (locale === "nl") return nl_manager_start_title(inputs)
	if (locale === "pl") return pl_manager_start_title(inputs)
	if (locale === "pt") return pt_manager_start_title(inputs)
	if (locale === "ru") return ru_manager_start_title(inputs)
	if (locale === "sv") return sv_manager_start_title(inputs)
	if (locale === "tr") return tr_manager_start_title(inputs)
	if (locale === "zh") return zh_manager_start_title(inputs)
	if (locale === "ja") return ja_manager_start_title(inputs)
	return en_manager_start_title(inputs)
});
