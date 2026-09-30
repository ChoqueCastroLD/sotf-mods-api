/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Series_FollowsInputs */

const en_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New followers`)
};

const es_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevos seguidores`)
};

const de_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Follower`)
};

const fr_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux abonnés`)
};

const it_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi follower`)
};

const nl_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe volgers`)
};

const pl_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowi obserwujący`)
};

const pt_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos seguidores`)
};

const ru_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые подписчики`)
};

const sv_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya följare`)
};

const tr_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni takipçiler`)
};

const zh_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新增关注者`)
};

const ja_basecamp_series_follows = /** @type {(inputs: Basecamp_Series_FollowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいフォロワー`)
};

/**
* | output |
* | --- |
* | "New followers" |
*
* @param {Basecamp_Series_FollowsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_series_follows = /** @type {((inputs?: Basecamp_Series_FollowsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Series_FollowsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_series_follows(inputs)
	if (locale === "de") return de_basecamp_series_follows(inputs)
	if (locale === "fr") return fr_basecamp_series_follows(inputs)
	if (locale === "it") return it_basecamp_series_follows(inputs)
	if (locale === "nl") return nl_basecamp_series_follows(inputs)
	if (locale === "pl") return pl_basecamp_series_follows(inputs)
	if (locale === "pt") return pt_basecamp_series_follows(inputs)
	if (locale === "ru") return ru_basecamp_series_follows(inputs)
	if (locale === "sv") return sv_basecamp_series_follows(inputs)
	if (locale === "tr") return tr_basecamp_series_follows(inputs)
	if (locale === "zh") return zh_basecamp_series_follows(inputs)
	if (locale === "ja") return ja_basecamp_series_follows(inputs)
	return en_basecamp_series_follows(inputs)
});
