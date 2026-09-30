/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Settings_Unlist_TitleInputs */

const en_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unlist ${i?.name}?`)
};

const es_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Ocultar ${i?.name} de las listas?`)
};

const de_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aus Listen nehmen?`)
};

const fr_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer ${i?.name} des listes ?`)
};

const it_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Togliere ${i?.name} dagli elenchi?`)
};

const nl_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} uit lijsten halen?`)
};

const pl_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ukryć ${i?.name} na listach?`)
};

const pt_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tirar ${i?.name} das listas?`)
};

const ru_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Убрать ${i?.name} из списков?`)
};

const sv_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ${i?.name} från listor?`)
};

const tr_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} listelerden kaldırılsın mı?`)
};

const zh_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`从列表中隐藏 ${i?.name}？`)
};

const ja_basecamp_settings_unlist_title = /** @type {(inputs: Basecamp_Settings_Unlist_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を一覧から外しますか？`)
};

/**
* | output |
* | --- |
* | "Unlist {name}?" |
*
* @param {Basecamp_Settings_Unlist_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_unlist_title = /** @type {((inputs: Basecamp_Settings_Unlist_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Unlist_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_unlist_title(inputs)
	if (locale === "de") return de_basecamp_settings_unlist_title(inputs)
	if (locale === "fr") return fr_basecamp_settings_unlist_title(inputs)
	if (locale === "it") return it_basecamp_settings_unlist_title(inputs)
	if (locale === "nl") return nl_basecamp_settings_unlist_title(inputs)
	if (locale === "pl") return pl_basecamp_settings_unlist_title(inputs)
	if (locale === "pt") return pt_basecamp_settings_unlist_title(inputs)
	if (locale === "ru") return ru_basecamp_settings_unlist_title(inputs)
	if (locale === "sv") return sv_basecamp_settings_unlist_title(inputs)
	if (locale === "tr") return tr_basecamp_settings_unlist_title(inputs)
	if (locale === "zh") return zh_basecamp_settings_unlist_title(inputs)
	if (locale === "ja") return ja_basecamp_settings_unlist_title(inputs)
	return en_basecamp_settings_unlist_title(inputs)
});
