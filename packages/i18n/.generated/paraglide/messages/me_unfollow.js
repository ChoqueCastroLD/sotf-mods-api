/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_UnfollowInputs */

const en_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unfollow`)
};

const es_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejar de seguir`)
};

const de_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht mehr folgen`)
};

const fr_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ne plus suivre`)
};

const it_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non seguire più`)
};

const nl_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet meer volgen`)
};

const pl_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestań obserwować`)
};

const pt_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixar de seguir`)
};

const ru_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отписаться`)
};

const sv_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sluta följa`)
};

const tr_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takibi bırak`)
};

const zh_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消关注`)
};

const ja_me_unfollow = /** @type {(inputs: Me_UnfollowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー解除`)
};

/**
* | output |
* | --- |
* | "Unfollow" |
*
* @param {Me_UnfollowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_unfollow = /** @type {((inputs?: Me_UnfollowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_UnfollowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_unfollow(inputs)
	if (locale === "de") return de_me_unfollow(inputs)
	if (locale === "fr") return fr_me_unfollow(inputs)
	if (locale === "it") return it_me_unfollow(inputs)
	if (locale === "nl") return nl_me_unfollow(inputs)
	if (locale === "pl") return pl_me_unfollow(inputs)
	if (locale === "pt") return pt_me_unfollow(inputs)
	if (locale === "ru") return ru_me_unfollow(inputs)
	if (locale === "sv") return sv_me_unfollow(inputs)
	if (locale === "tr") return tr_me_unfollow(inputs)
	if (locale === "zh") return zh_me_unfollow(inputs)
	if (locale === "ja") return ja_me_unfollow(inputs)
	return en_me_unfollow(inputs)
});
