/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Settings_Removal_TitleInputs */

const en_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Request the removal of ${i?.name}?`)
};

const es_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Pedir la retirada de ${i?.name}?`)
};

const de_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entfernung von ${i?.name} beantragen?`)
};

const fr_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Demander le retrait de ${i?.name} ?`)
};

const it_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Chiedere la rimozione di ${i?.name}?`)
};

const nl_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwijdering van ${i?.name} aanvragen?`)
};

const pl_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Poprosić o usunięcie ${i?.name}?`)
};

const pt_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pedir a remoção de ${i?.name}?`)
};

const ru_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Запросить удаление ${i?.name}?`)
};

const sv_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Begär borttagning av ${i?.name}?`)
};

const tr_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} için kaldırma istensin mi?`)
};

const zh_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`申请下架 ${i?.name}？`)
};

const ja_basecamp_settings_removal_title = /** @type {(inputs: Basecamp_Settings_Removal_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の削除を依頼しますか？`)
};

/**
* | output |
* | --- |
* | "Request the removal of {name}?" |
*
* @param {Basecamp_Settings_Removal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_removal_title = /** @type {((inputs: Basecamp_Settings_Removal_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_removal_title(inputs)
	if (locale === "de") return de_basecamp_settings_removal_title(inputs)
	if (locale === "fr") return fr_basecamp_settings_removal_title(inputs)
	if (locale === "it") return it_basecamp_settings_removal_title(inputs)
	if (locale === "nl") return nl_basecamp_settings_removal_title(inputs)
	if (locale === "pl") return pl_basecamp_settings_removal_title(inputs)
	if (locale === "pt") return pt_basecamp_settings_removal_title(inputs)
	if (locale === "ru") return ru_basecamp_settings_removal_title(inputs)
	if (locale === "sv") return sv_basecamp_settings_removal_title(inputs)
	if (locale === "tr") return tr_basecamp_settings_removal_title(inputs)
	if (locale === "zh") return zh_basecamp_settings_removal_title(inputs)
	if (locale === "ja") return ja_basecamp_settings_removal_title(inputs)
	return en_basecamp_settings_removal_title(inputs)
});
