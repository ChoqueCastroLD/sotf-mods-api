/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Listing_License_PlaceholderInputs */

const en_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a licence`)
};

const es_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una licencia`)
};

const de_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz wählen`)
};

const fr_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez une licence`)
};

const it_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una licenza`)
};

const nl_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een licentie`)
};

const pl_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz licencję`)
};

const pt_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma licença`)
};

const ru_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите лицензию`)
};

const sv_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en licens`)
};

const tr_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir lisans seç`)
};

const zh_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择许可证`)
};

const ja_basecamp_listing_license_placeholder = /** @type {(inputs: Basecamp_Listing_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスを選択`)
};

/**
* | output |
* | --- |
* | "Choose a licence" |
*
* @param {Basecamp_Listing_License_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_listing_license_placeholder = /** @type {((inputs?: Basecamp_Listing_License_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Listing_License_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_listing_license_placeholder(inputs)
	if (locale === "de") return de_basecamp_listing_license_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_listing_license_placeholder(inputs)
	if (locale === "it") return it_basecamp_listing_license_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_listing_license_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_listing_license_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_listing_license_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_listing_license_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_listing_license_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_listing_license_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_listing_license_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_listing_license_placeholder(inputs)
	return en_basecamp_listing_license_placeholder(inputs)
});
