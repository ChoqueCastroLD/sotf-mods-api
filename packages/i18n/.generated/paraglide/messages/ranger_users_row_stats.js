/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ mods: NonNullable<unknown>, reports: NonNullable<unknown> }} Ranger_Users_Row_StatsInputs */

const en_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods: ${i?.mods} · Reports against: ${i?.reports}`)
};

const es_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods: ${i?.mods} · Reportes en contra: ${i?.reports}`)
};

const de_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods: ${i?.mods} · Meldungen gegen: ${i?.reports}`)
};

const fr_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods : ${i?.mods} · Signalements contre : ${i?.reports}`)
};

const it_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mod: ${i?.mods} · Segnalazioni contro: ${i?.reports}`)
};

const nl_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods: ${i?.mods} · Meldingen tegen: ${i?.reports}`)
};

const pl_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mody: ${i?.mods} · Zgłoszenia przeciw: ${i?.reports}`)
};

const pt_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mods: ${i?.mods} · Denúncias contra: ${i?.reports}`)
};

const ru_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Моды: ${i?.mods} · Жалобы на него: ${i?.reports}`)
};

const sv_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Moddar: ${i?.mods} · Anmälningar mot: ${i?.reports}`)
};

const tr_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modlar: ${i?.mods} · Aleyhine şikâyet: ${i?.reports}`)
};

const zh_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`模组：${i?.mods} · 被举报：${i?.reports}`)
};

const ja_ranger_users_row_stats = /** @type {(inputs: Ranger_Users_Row_StatsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`MOD：${i?.mods} · 被報告：${i?.reports}`)
};

/**
* | output |
* | --- |
* | "Mods: {mods} · Reports against: {reports}" |
*
* @param {Ranger_Users_Row_StatsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_users_row_stats = /** @type {((inputs: Ranger_Users_Row_StatsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Row_StatsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_users_row_stats(inputs)
	if (locale === "de") return de_ranger_users_row_stats(inputs)
	if (locale === "fr") return fr_ranger_users_row_stats(inputs)
	if (locale === "it") return it_ranger_users_row_stats(inputs)
	if (locale === "nl") return nl_ranger_users_row_stats(inputs)
	if (locale === "pl") return pl_ranger_users_row_stats(inputs)
	if (locale === "pt") return pt_ranger_users_row_stats(inputs)
	if (locale === "ru") return ru_ranger_users_row_stats(inputs)
	if (locale === "sv") return sv_ranger_users_row_stats(inputs)
	if (locale === "tr") return tr_ranger_users_row_stats(inputs)
	if (locale === "zh") return zh_ranger_users_row_stats(inputs)
	if (locale === "ja") return ja_ranger_users_row_stats(inputs)
	return en_ranger_users_row_stats(inputs)
});
