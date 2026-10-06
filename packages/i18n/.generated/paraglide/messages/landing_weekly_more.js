/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Weekly_MoreInputs */

const en_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show more`)
};

const es_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar más`)
};

const de_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr anzeigen`)
};

const fr_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher plus`)
};

const it_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra altri`)
};

const nl_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer tonen`)
};

const pl_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż więcej`)
};

const pt_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar mais`)
};

const ru_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать ещё`)
};

const sv_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa fler`)
};

const tr_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla göster`)
};

const zh_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示更多`)
};

const ja_landing_weekly_more = /** @type {(inputs: Landing_Weekly_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`もっと見る`)
};

/**
* | output |
* | --- |
* | "Show more" |
*
* @param {Landing_Weekly_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_weekly_more = /** @type {((inputs?: Landing_Weekly_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Weekly_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_weekly_more(inputs)
	if (locale === "de") return de_landing_weekly_more(inputs)
	if (locale === "fr") return fr_landing_weekly_more(inputs)
	if (locale === "it") return it_landing_weekly_more(inputs)
	if (locale === "nl") return nl_landing_weekly_more(inputs)
	if (locale === "pl") return pl_landing_weekly_more(inputs)
	if (locale === "pt") return pt_landing_weekly_more(inputs)
	if (locale === "ru") return ru_landing_weekly_more(inputs)
	if (locale === "sv") return sv_landing_weekly_more(inputs)
	if (locale === "tr") return tr_landing_weekly_more(inputs)
	if (locale === "zh") return zh_landing_weekly_more(inputs)
	if (locale === "ja") return ja_landing_weekly_more(inputs)
	return en_landing_weekly_more(inputs)
});
