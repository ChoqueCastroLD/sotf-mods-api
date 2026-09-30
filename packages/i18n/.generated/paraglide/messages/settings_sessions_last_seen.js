/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Settings_Sessions_Last_SeenInputs */

const en_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`last active ${i?.when}`)
};

const es_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`última actividad ${i?.when}`)
};

const de_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`zuletzt aktiv ${i?.when}`)
};

const fr_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`dernière activité ${i?.when}`)
};

const it_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ultima attività ${i?.when}`)
};

const nl_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`laatst actief ${i?.when}`)
};

const pl_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ostatnio aktywna ${i?.when}`)
};

const pt_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`última atividade ${i?.when}`)
};

const ru_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`была активна ${i?.when}`)
};

const sv_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`senast aktiv ${i?.when}`)
};

const tr_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`son etkinlik ${i?.when}`)
};

const zh_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最后活跃于 ${i?.when}`)
};

const ja_settings_sessions_last_seen = /** @type {(inputs: Settings_Sessions_Last_SeenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終アクティブ ${i?.when}`)
};

/**
* | output |
* | --- |
* | "last active {when}" |
*
* @param {Settings_Sessions_Last_SeenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_sessions_last_seen = /** @type {((inputs: Settings_Sessions_Last_SeenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Last_SeenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_sessions_last_seen(inputs)
	if (locale === "de") return de_settings_sessions_last_seen(inputs)
	if (locale === "fr") return fr_settings_sessions_last_seen(inputs)
	if (locale === "it") return it_settings_sessions_last_seen(inputs)
	if (locale === "nl") return nl_settings_sessions_last_seen(inputs)
	if (locale === "pl") return pl_settings_sessions_last_seen(inputs)
	if (locale === "pt") return pt_settings_sessions_last_seen(inputs)
	if (locale === "ru") return ru_settings_sessions_last_seen(inputs)
	if (locale === "sv") return sv_settings_sessions_last_seen(inputs)
	if (locale === "tr") return tr_settings_sessions_last_seen(inputs)
	if (locale === "zh") return zh_settings_sessions_last_seen(inputs)
	if (locale === "ja") return ja_settings_sessions_last_seen(inputs)
	return en_settings_sessions_last_seen(inputs)
});
