/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_UnfollowInputs */

const en_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfollow`)
};

const es_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar de seguir`)
};

const de_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr folgen`)
};

const fr_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus suivre`)
};

const it_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Smetti di seguire`)
};

const nl_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ontvolgen`)
};

const pl_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestań obserwować`)
};

const pt_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixar de seguir`)
};

const ru_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отписаться`)
};

const sv_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta följa`)
};

const tr_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takibi bırak`)
};

const zh_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关注`)
};

const ja_kitsocial_console_unfollow = /** @type {(inputs: Kitsocial_Console_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー解除`)
};

/**
* | output |
* | --- |
* | "Unfollow" |
*
* @param {Kitsocial_Console_UnfollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_unfollow = /** @type {((inputs?: Kitsocial_Console_UnfollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_UnfollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_unfollow(inputs)
	if (locale === "de") return de_kitsocial_console_unfollow(inputs)
	if (locale === "fr") return fr_kitsocial_console_unfollow(inputs)
	if (locale === "it") return it_kitsocial_console_unfollow(inputs)
	if (locale === "nl") return nl_kitsocial_console_unfollow(inputs)
	if (locale === "pl") return pl_kitsocial_console_unfollow(inputs)
	if (locale === "pt") return pt_kitsocial_console_unfollow(inputs)
	if (locale === "ru") return ru_kitsocial_console_unfollow(inputs)
	if (locale === "sv") return sv_kitsocial_console_unfollow(inputs)
	if (locale === "tr") return tr_kitsocial_console_unfollow(inputs)
	if (locale === "zh") return zh_kitsocial_console_unfollow(inputs)
	if (locale === "ja") return ja_kitsocial_console_unfollow(inputs)
	return en_kitsocial_console_unfollow(inputs)
});
