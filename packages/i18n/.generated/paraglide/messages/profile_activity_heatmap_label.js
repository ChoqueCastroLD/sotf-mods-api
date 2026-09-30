/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Profile_Activity_Heatmap_LabelInputs */

const en_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributions of ${i?.name} in the last 12 months`)
};

const es_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contribuciones de ${i?.name} en los últimos 12 meses`)
};

const de_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Beiträge von ${i?.name} in den letzten 12 Monaten`)
};

const fr_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributions de ${i?.name} au cours des 12 derniers mois`)
};

const it_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contributi di ${i?.name} negli ultimi 12 mesi`)
};

const nl_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bijdragen van ${i?.name} in de afgelopen 12 maanden`)
};

const pl_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wkład ${i?.name} w ostatnich 12 miesiącach`)
};

const pt_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Contribuições de ${i?.name} nos últimos 12 meses`)
};

const ru_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вклады ${i?.name} за последние 12 месяцев`)
};

const sv_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bidrag från ${i?.name} de senaste 12 månaderna`)
};

const tr_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} kullanıcısının son 12 aydaki katkıları`)
};

const zh_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 近 12 个月的贡献`)
};

const ja_profile_activity_heatmap_label = /** @type {(inputs: Profile_Activity_Heatmap_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} の過去 12 か月の貢献`)
};

/**
* | output |
* | --- |
* | "Contributions of {name} in the last 12 months" |
*
* @param {Profile_Activity_Heatmap_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_activity_heatmap_label = /** @type {((inputs: Profile_Activity_Heatmap_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Heatmap_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_activity_heatmap_label(inputs)
	if (locale === "de") return de_profile_activity_heatmap_label(inputs)
	if (locale === "fr") return fr_profile_activity_heatmap_label(inputs)
	if (locale === "it") return it_profile_activity_heatmap_label(inputs)
	if (locale === "nl") return nl_profile_activity_heatmap_label(inputs)
	if (locale === "pl") return pl_profile_activity_heatmap_label(inputs)
	if (locale === "pt") return pt_profile_activity_heatmap_label(inputs)
	if (locale === "ru") return ru_profile_activity_heatmap_label(inputs)
	if (locale === "sv") return sv_profile_activity_heatmap_label(inputs)
	if (locale === "tr") return tr_profile_activity_heatmap_label(inputs)
	if (locale === "zh") return zh_profile_activity_heatmap_label(inputs)
	if (locale === "ja") return ja_profile_activity_heatmap_label(inputs)
	return en_profile_activity_heatmap_label(inputs)
});
