/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Kits_FollowersInputs */

const en_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} follower`);
	return /** @type {LocalizedString} */ (`${i?.display} followers`)
	
};

const es_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} seguidor`);
	return /** @type {LocalizedString} */ (`${i?.display} seguidores`)
	
};

const de_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} Follower`);
	return /** @type {LocalizedString} */ (`${i?.display} Follower`)
	
};

const fr_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} abonné`);
	return /** @type {LocalizedString} */ (`${i?.display} abonnés`)
	
};

const it_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} follower`);
	return /** @type {LocalizedString} */ (`${i?.display} follower`)
	
};

const nl_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} volger`);
	return /** @type {LocalizedString} */ (`${i?.display} volgers`)
	
};

const pl_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} obserwujący`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} obserwujących`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} obserwujących`);
	return /** @type {LocalizedString} */ (`${i?.display} obserwującego`)
	
};

const pt_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} seguidor`);
	return /** @type {LocalizedString} */ (`${i?.display} seguidores`)
	
};

const ru_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} подписчик`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.display} подписчика`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.display} подписчиков`);
	return /** @type {LocalizedString} */ (`${i?.display} подписчика`)
	
};

const sv_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} följare`);
	return /** @type {LocalizedString} */ (`${i?.display} följare`)
	
};

const tr_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} takipçi`);
	return /** @type {LocalizedString} */ (`${i?.display} takipçi`)
	
};

const zh_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.display} 位关注者`)
};

const ja_kits_followers = /** @type {(inputs: Kits_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`フォロワー ${i?.display} 人`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} follower" |
* | * | "{display} followers" |
*
* @param {Kits_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_followers = /** @type {((inputs: Kits_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_followers(inputs)
	if (locale === "de") return de_kits_followers(inputs)
	if (locale === "fr") return fr_kits_followers(inputs)
	if (locale === "it") return it_kits_followers(inputs)
	if (locale === "nl") return nl_kits_followers(inputs)
	if (locale === "pl") return pl_kits_followers(inputs)
	if (locale === "pt") return pt_kits_followers(inputs)
	if (locale === "ru") return ru_kits_followers(inputs)
	if (locale === "sv") return sv_kits_followers(inputs)
	if (locale === "tr") return tr_kits_followers(inputs)
	if (locale === "zh") return zh_kits_followers(inputs)
	if (locale === "ja") return ja_kits_followers(inputs)
	return en_kits_followers(inputs)
});
