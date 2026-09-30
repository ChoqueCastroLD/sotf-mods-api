/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Creator_FollowersInputs */

const en_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new follower`);
	return /** @type {LocalizedString} */ (`${count__number} new followers`)
	
};

const es_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} seguidor nuevo`);
	return /** @type {LocalizedString} */ (`${count__number} seguidores nuevos`)
	
};

const de_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neuer Follower`);
	return /** @type {LocalizedString} */ (`${count__number} neue Follower`)
	
};

const fr_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvel abonné`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux abonnés`)
	
};

const it_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuovo follower`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi follower`)
	
};

const nl_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe volger`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe volgers`)
	
};

const pl_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowy obserwujący`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowych obserwujących`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych obserwujących`);
	return /** @type {LocalizedString} */ (`${count__number} nowego obserwującego`)
	
};

const pt_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} novo seguidor`);
	return /** @type {LocalizedString} */ (`${count__number} novos seguidores`)
	
};

const ru_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый подписчик`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых подписчика`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых подписчиков`);
	return /** @type {LocalizedString} */ (`${count__number} нового подписчика`)
	
};

const sv_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny följare`);
	return /** @type {LocalizedString} */ (`${count__number} nya följare`)
	
};

const tr_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yeni takipçi`);
	return /** @type {LocalizedString} */ (`${count__number} yeni takipçi`)
	
};

const zh_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 位新关注者`)
};

const ja_emails_notify_creator_followers = /** @type {(inputs: Emails_Notify_Creator_FollowersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`新しいフォロワー ${count__number} 人`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new follower" |
* | * | "{count__number} new followers" |
*
* @param {Emails_Notify_Creator_FollowersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_followers = /** @type {((inputs: Emails_Notify_Creator_FollowersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_FollowersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_followers(inputs)
	if (locale === "de") return de_emails_notify_creator_followers(inputs)
	if (locale === "fr") return fr_emails_notify_creator_followers(inputs)
	if (locale === "it") return it_emails_notify_creator_followers(inputs)
	if (locale === "nl") return nl_emails_notify_creator_followers(inputs)
	if (locale === "pl") return pl_emails_notify_creator_followers(inputs)
	if (locale === "pt") return pt_emails_notify_creator_followers(inputs)
	if (locale === "ru") return ru_emails_notify_creator_followers(inputs)
	if (locale === "sv") return sv_emails_notify_creator_followers(inputs)
	if (locale === "tr") return tr_emails_notify_creator_followers(inputs)
	if (locale === "zh") return zh_emails_notify_creator_followers(inputs)
	if (locale === "ja") return ja_emails_notify_creator_followers(inputs)
	return en_emails_notify_creator_followers(inputs)
});
