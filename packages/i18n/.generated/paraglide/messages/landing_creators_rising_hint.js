/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Creators_Rising_HintInputs */

const en_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New and fast-growing in the last 90 days`)
};

const es_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevos y en rápido crecimiento en los últimos 90 días`)
};

const de_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu und schnell wachsend in den letzten 90 Tagen`)
};

const fr_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux et en forte croissance sur les 90 derniers jours`)
};

const it_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi e in rapida crescita negli ultimi 90 giorni`)
};

const nl_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw en snelgroeiend in de afgelopen 90 dagen`)
};

const pl_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowi i szybko rosnący w ostatnich 90 dniach`)
};

const pt_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos e crescendo rápido nos últimos 90 dias`)
};

const ru_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые и быстрорастущие за последние 90 дней`)
};

const sv_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya och snabbt växande de senaste 90 dagarna`)
};

const tr_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 90 günde yeni ve hızla büyüyen geliştiriciler`)
};

const zh_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`过去 90 天内的新人和快速成长者`)
};

const ja_landing_creators_rising_hint = /** @type {(inputs: Landing_Creators_Rising_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`過去90日間の新人・急成長クリエイター`)
};

/**
* | output |
* | --- |
* | "New and fast-growing in the last 90 days" |
*
* @param {Landing_Creators_Rising_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_creators_rising_hint = /** @type {((inputs?: Landing_Creators_Rising_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Creators_Rising_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_creators_rising_hint(inputs)
	if (locale === "de") return de_landing_creators_rising_hint(inputs)
	if (locale === "fr") return fr_landing_creators_rising_hint(inputs)
	if (locale === "it") return it_landing_creators_rising_hint(inputs)
	if (locale === "nl") return nl_landing_creators_rising_hint(inputs)
	if (locale === "pl") return pl_landing_creators_rising_hint(inputs)
	if (locale === "pt") return pt_landing_creators_rising_hint(inputs)
	if (locale === "ru") return ru_landing_creators_rising_hint(inputs)
	if (locale === "sv") return sv_landing_creators_rising_hint(inputs)
	if (locale === "tr") return tr_landing_creators_rising_hint(inputs)
	if (locale === "zh") return zh_landing_creators_rising_hint(inputs)
	if (locale === "ja") return ja_landing_creators_rising_hint(inputs)
	return en_landing_creators_rising_hint(inputs)
});
