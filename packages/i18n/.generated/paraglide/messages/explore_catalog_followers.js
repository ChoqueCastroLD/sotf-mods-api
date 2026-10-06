/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Catalog_FollowersInputs */

const en_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} follower`);
	return /** @type {LocalizedString} */ (`${count__number} followers`)
	
};

const es_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} seguidor`);
	return /** @type {LocalizedString} */ (`${count__number} seguidores`)
	
};

const de_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Follower`);
	return /** @type {LocalizedString} */ (`${count__number} Follower`)
	
};

const fr_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} abonné`);
	return /** @type {LocalizedString} */ (`${count__number} abonnés`)
	
};

const it_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} follower`);
	return /** @type {LocalizedString} */ (`${count__number} follower`)
	
};

const nl_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} volger`);
	return /** @type {LocalizedString} */ (`${count__number} volgers`)
	
};

const pl_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} obserwujący`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} obserwujących`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} obserwujących`);
	return /** @type {LocalizedString} */ (`${count__number} obserwujących`)
	
};

const pt_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} seguidor`);
	return /** @type {LocalizedString} */ (`${count__number} seguidores`)
	
};

const ru_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} подписчик`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} подписчика`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} подписчиков`);
	return /** @type {LocalizedString} */ (`${count__number} подписчика`)
	
};

const sv_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} följare`);
	return /** @type {LocalizedString} */ (`${count__number} följare`)
	
};

const tr_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} takipçi`);
	return /** @type {LocalizedString} */ (`${count__number} takipçi`)
	
};

const zh_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 位关注者`)
};

const ja_explore_catalog_followers = /** @type {(inputs: Explore_Catalog_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}人のフォロワー`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} follower" |
* | * | "{count__number} followers" |
*
* @param {Explore_Catalog_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_followers = /** @type {((inputs: Explore_Catalog_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_followers(inputs)
	if (locale === "de") return de_explore_catalog_followers(inputs)
	if (locale === "fr") return fr_explore_catalog_followers(inputs)
	if (locale === "it") return it_explore_catalog_followers(inputs)
	if (locale === "nl") return nl_explore_catalog_followers(inputs)
	if (locale === "pl") return pl_explore_catalog_followers(inputs)
	if (locale === "pt") return pt_explore_catalog_followers(inputs)
	if (locale === "ru") return ru_explore_catalog_followers(inputs)
	if (locale === "sv") return sv_explore_catalog_followers(inputs)
	if (locale === "tr") return tr_explore_catalog_followers(inputs)
	if (locale === "zh") return zh_explore_catalog_followers(inputs)
	if (locale === "ja") return ja_explore_catalog_followers(inputs)
	return en_explore_catalog_followers(inputs)
});
