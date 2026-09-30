/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Settings_Archive_TitleInputs */

const en_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Archive ${i?.name}?`)
};

const es_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Archivar ${i?.name}?`)
};

const de_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} archivieren?`)
};

const fr_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Archiver ${i?.name} ?`)
};

const it_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Archiviare ${i?.name}?`)
};

const nl_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} archiveren?`)
};

const pl_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zarchiwizować ${i?.name}?`)
};

const pt_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arquivar ${i?.name}?`)
};

const ru_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Архивировать ${i?.name}?`)
};

const sv_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Arkivera ${i?.name}?`)
};

const tr_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} arşivlensin mi?`)
};

const zh_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`归档 ${i?.name}？`)
};

const ja_basecamp_settings_archive_title = /** @type {(inputs: Basecamp_Settings_Archive_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} をアーカイブしますか？`)
};

/**
* | output |
* | --- |
* | "Archive {name}?" |
*
* @param {Basecamp_Settings_Archive_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_archive_title = /** @type {((inputs: Basecamp_Settings_Archive_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Archive_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_archive_title(inputs)
	if (locale === "de") return de_basecamp_settings_archive_title(inputs)
	if (locale === "fr") return fr_basecamp_settings_archive_title(inputs)
	if (locale === "it") return it_basecamp_settings_archive_title(inputs)
	if (locale === "nl") return nl_basecamp_settings_archive_title(inputs)
	if (locale === "pl") return pl_basecamp_settings_archive_title(inputs)
	if (locale === "pt") return pt_basecamp_settings_archive_title(inputs)
	if (locale === "ru") return ru_basecamp_settings_archive_title(inputs)
	if (locale === "sv") return sv_basecamp_settings_archive_title(inputs)
	if (locale === "tr") return tr_basecamp_settings_archive_title(inputs)
	if (locale === "zh") return zh_basecamp_settings_archive_title(inputs)
	if (locale === "ja") return ja_basecamp_settings_archive_title(inputs)
	return en_basecamp_settings_archive_title(inputs)
});
