/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Activity_Table_CaptionInputs */

const en_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributions of ${i?.name} per month`)
};

const es_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contribuciones de ${i?.name} por mes`)
};

const de_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beiträge von ${i?.name} pro Monat`)
};

const fr_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributions de ${i?.name} par mois`)
};

const it_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributi di ${i?.name} per mese`)
};

const nl_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijdragen van ${i?.name} per maand`)
};

const pl_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wkład ${i?.name} w poszczególnych miesiącach`)
};

const pt_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contribuições de ${i?.name} por mês`)
};

const ru_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вклады ${i?.name} по месяцам`)
};

const sv_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bidrag från ${i?.name} per månad`)
};

const tr_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının aylık katkıları`)
};

const zh_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 每月的贡献`)
};

const ja_profile_activity_table_caption = /** @type {(inputs: Profile_Activity_Table_CaptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の月別の貢献`)
};

/**
* | output |
* | --- |
* | "Contributions of {name} per month" |
*
* @param {Profile_Activity_Table_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_table_caption = /** @type {((inputs: Profile_Activity_Table_CaptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_CaptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_table_caption(inputs)
	if (locale === "de") return de_profile_activity_table_caption(inputs)
	if (locale === "fr") return fr_profile_activity_table_caption(inputs)
	if (locale === "it") return it_profile_activity_table_caption(inputs)
	if (locale === "nl") return nl_profile_activity_table_caption(inputs)
	if (locale === "pl") return pl_profile_activity_table_caption(inputs)
	if (locale === "pt") return pt_profile_activity_table_caption(inputs)
	if (locale === "ru") return ru_profile_activity_table_caption(inputs)
	if (locale === "sv") return sv_profile_activity_table_caption(inputs)
	if (locale === "tr") return tr_profile_activity_table_caption(inputs)
	if (locale === "zh") return zh_profile_activity_table_caption(inputs)
	if (locale === "ja") return ja_profile_activity_table_caption(inputs)
	return en_profile_activity_table_caption(inputs)
});
