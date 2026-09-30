/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Activity_Table_ToggleInputs */

const en_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View as table`)
};

const es_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver como tabla`)
};

const de_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als Tabelle anzeigen`)
};

const fr_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher sous forme de tableau`)
};

const it_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra come tabella`)
};

const nl_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als tabel bekijken`)
};

const pl_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż jako tabelę`)
};

const pt_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver como tabela`)
};

const ru_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать таблицей`)
};

const sv_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa som tabell`)
};

const tr_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tablo olarak göster`)
};

const zh_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以表格查看`)
};

const ja_profile_activity_table_toggle = /** @type {(inputs: Profile_Activity_Table_ToggleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表で表示`)
};

/**
* | output |
* | --- |
* | "View as table" |
*
* @param {Profile_Activity_Table_ToggleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_table_toggle = /** @type {((inputs?: Profile_Activity_Table_ToggleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_ToggleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_table_toggle(inputs)
	if (locale === "de") return de_profile_activity_table_toggle(inputs)
	if (locale === "fr") return fr_profile_activity_table_toggle(inputs)
	if (locale === "it") return it_profile_activity_table_toggle(inputs)
	if (locale === "nl") return nl_profile_activity_table_toggle(inputs)
	if (locale === "pl") return pl_profile_activity_table_toggle(inputs)
	if (locale === "pt") return pt_profile_activity_table_toggle(inputs)
	if (locale === "ru") return ru_profile_activity_table_toggle(inputs)
	if (locale === "sv") return sv_profile_activity_table_toggle(inputs)
	if (locale === "tr") return tr_profile_activity_table_toggle(inputs)
	if (locale === "zh") return zh_profile_activity_table_toggle(inputs)
	if (locale === "ja") return ja_profile_activity_table_toggle(inputs)
	return en_profile_activity_table_toggle(inputs)
});
