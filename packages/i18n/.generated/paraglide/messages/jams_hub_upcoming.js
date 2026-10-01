/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Hub_UpcomingInputs */

const en_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coming up`)
};

const es_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Próximamente`)
};

const de_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demnächst`)
};

const fr_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`À venir`)
};

const it_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In arrivo`)
};

const nl_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Binnenkort`)
};

const pl_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wkrótce`)
};

const pt_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em breve`)
};

const ru_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скоро`)
};

const sv_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På väg`)
};

const tr_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaklaşanlar`)
};

const zh_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`即将开始`)
};

const ja_jams_hub_upcoming = /** @type {(inputs: Jams_Hub_UpcomingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開催予定`)
};

/**
* | output |
* | --- |
* | "Coming up" |
*
* @param {Jams_Hub_UpcomingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_hub_upcoming = /** @type {((inputs?: Jams_Hub_UpcomingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Hub_UpcomingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_hub_upcoming(inputs)
	if (locale === "de") return de_jams_hub_upcoming(inputs)
	if (locale === "fr") return fr_jams_hub_upcoming(inputs)
	if (locale === "it") return it_jams_hub_upcoming(inputs)
	if (locale === "nl") return nl_jams_hub_upcoming(inputs)
	if (locale === "pl") return pl_jams_hub_upcoming(inputs)
	if (locale === "pt") return pt_jams_hub_upcoming(inputs)
	if (locale === "ru") return ru_jams_hub_upcoming(inputs)
	if (locale === "sv") return sv_jams_hub_upcoming(inputs)
	if (locale === "tr") return tr_jams_hub_upcoming(inputs)
	if (locale === "zh") return zh_jams_hub_upcoming(inputs)
	if (locale === "ja") return ja_jams_hub_upcoming(inputs)
	return en_jams_hub_upcoming(inputs)
});
