/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_License_PlaceholderInputs */

const en_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a licence`)
};

const es_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una licencia`)
};

const de_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lizenz wählen`)
};

const fr_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisir une licence`)
};

const it_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una licenza`)
};

const nl_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een licentie`)
};

const pl_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz licencję`)
};

const pt_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma licença`)
};

const ru_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите лицензию`)
};

const sv_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj en licens`)
};

const tr_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir lisans seç`)
};

const zh_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择许可`)
};

const ja_upload_license_placeholder = /** @type {(inputs: Upload_License_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライセンスを選択`)
};

/**
* | output |
* | --- |
* | "Choose a licence" |
*
* @param {Upload_License_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_license_placeholder = /** @type {((inputs?: Upload_License_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_license_placeholder(inputs)
	if (locale === "de") return de_upload_license_placeholder(inputs)
	if (locale === "fr") return fr_upload_license_placeholder(inputs)
	if (locale === "it") return it_upload_license_placeholder(inputs)
	if (locale === "nl") return nl_upload_license_placeholder(inputs)
	if (locale === "pl") return pl_upload_license_placeholder(inputs)
	if (locale === "pt") return pt_upload_license_placeholder(inputs)
	if (locale === "ru") return ru_upload_license_placeholder(inputs)
	if (locale === "sv") return sv_upload_license_placeholder(inputs)
	if (locale === "tr") return tr_upload_license_placeholder(inputs)
	if (locale === "zh") return zh_upload_license_placeholder(inputs)
	if (locale === "ja") return ja_upload_license_placeholder(inputs)
	return en_upload_license_placeholder(inputs)
});
