/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Faq_TitleInputs */

const en_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before you download`)
};

const es_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes de descargar`)
};

const de_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevor du herunterlädst`)
};

const fr_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avant de télécharger`)
};

const it_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima di scaricare`)
};

const nl_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor je downloadt`)
};

const pl_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zanim pobierzesz`)
};

const pt_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes de baixar`)
};

const ru_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перед загрузкой`)
};

const sv_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innan du laddar ner`)
};

const tr_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeden önce`)
};

const zh_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载之前`)
};

const ja_manager_faq_title = /** @type {(inputs: Manager_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロードの前に`)
};

/**
* | output |
* | --- |
* | "Before you download" |
*
* @param {Manager_Faq_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_faq_title = /** @type {((inputs?: Manager_Faq_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_faq_title(inputs)
	if (locale === "de") return de_manager_faq_title(inputs)
	if (locale === "fr") return fr_manager_faq_title(inputs)
	if (locale === "it") return it_manager_faq_title(inputs)
	if (locale === "nl") return nl_manager_faq_title(inputs)
	if (locale === "pl") return pl_manager_faq_title(inputs)
	if (locale === "pt") return pt_manager_faq_title(inputs)
	if (locale === "ru") return ru_manager_faq_title(inputs)
	if (locale === "sv") return sv_manager_faq_title(inputs)
	if (locale === "tr") return tr_manager_faq_title(inputs)
	if (locale === "zh") return zh_manager_faq_title(inputs)
	if (locale === "ja") return ja_manager_faq_title(inputs)
	return en_manager_faq_title(inputs)
});
