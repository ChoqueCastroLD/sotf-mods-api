/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_Legacy_TitleInputs */

const en_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This description keeps its old layout`)
};

const es_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta descripción conserva su formato antiguo`)
};

const de_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese Beschreibung behält ihr altes Layout`)
};

const fr_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette description garde son ancienne mise en forme`)
};

const it_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa descrizione mantiene il vecchio layout`)
};

const nl_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze beschrijving behoudt haar oude opmaak`)
};

const pl_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten opis zachowuje stary układ`)
};

const pt_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta descrição mantém o layout antigo`)
};

const ru_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это описание сохраняет старую разметку`)
};

const sv_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här beskrivningen behåller sin gamla layout`)
};

const tr_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu açıklama eski düzenini koruyor`)
};

const zh_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此描述保留旧版排版`)
};

const ja_basecamp_listing_legacy_title = /** @type {(inputs: Basecamp_Listing_Legacy_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この説明は旧レイアウトのままです`)
};

/**
* | output |
* | --- |
* | "This description keeps its old layout" |
*
* @param {Basecamp_Listing_Legacy_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_legacy_title = /** @type {((inputs?: Basecamp_Listing_Legacy_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_Legacy_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_legacy_title(inputs)
	if (locale === "de") return de_basecamp_listing_legacy_title(inputs)
	if (locale === "fr") return fr_basecamp_listing_legacy_title(inputs)
	if (locale === "it") return it_basecamp_listing_legacy_title(inputs)
	if (locale === "nl") return nl_basecamp_listing_legacy_title(inputs)
	if (locale === "pl") return pl_basecamp_listing_legacy_title(inputs)
	if (locale === "pt") return pt_basecamp_listing_legacy_title(inputs)
	if (locale === "ru") return ru_basecamp_listing_legacy_title(inputs)
	if (locale === "sv") return sv_basecamp_listing_legacy_title(inputs)
	if (locale === "tr") return tr_basecamp_listing_legacy_title(inputs)
	if (locale === "zh") return zh_basecamp_listing_legacy_title(inputs)
	if (locale === "ja") return ja_basecamp_listing_legacy_title(inputs)
	return en_basecamp_listing_legacy_title(inputs)
});
