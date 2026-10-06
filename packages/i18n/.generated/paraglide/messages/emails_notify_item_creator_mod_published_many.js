/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Creator_Mod_Published_ManyInputs */

const en_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} published ${count__number} new mod, the latest is ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} published ${count__number} new mods, the latest is ${i?.mod}`)
	
};

const es_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} publicó ${count__number} mod nuevo; el último es ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} publicó ${count__number} mods nuevos; el último es ${i?.mod}`)
	
};

const de_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} hat ${count__number} neuen Mod veröffentlicht, der neueste ist ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${count__number} neue Mods veröffentlicht, der neueste ist ${i?.mod}`)
	
};

const fr_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} a publié ${count__number} nouveau mod, le dernier est ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} a publié ${count__number} nouveaux mods, le dernier est ${i?.mod}`)
	
};

const it_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} ha pubblicato ${count__number} nuovo mod, l’ultimo è ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} ha pubblicato ${count__number} nuovi mod, l’ultimo è ${i?.mod}`)
	
};

const nl_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} heeft ${count__number} nieuwe mod gepubliceerd, de nieuwste is ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} heeft ${count__number} nieuwe mods gepubliceerd, de nieuwste is ${i?.mod}`)
	
};

const pl_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${count__number} nowy mod, najnowszy to ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${count__number} nowe mody, najnowszy to ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${count__number} nowych modów, najnowszy to ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} opublikował(a) ${count__number} nowego moda, najnowszy to ${i?.mod}`)
	
};

const pt_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} publicou ${count__number} novo mod, o mais recente é ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} publicou ${count__number} novos mods, o mais recente é ${i?.mod}`)
	
};

const ru_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${count__number} новый мод, последний: ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${count__number} новых мода, последний: ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${count__number} новых модов, последний: ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} опубликовал(а) ${count__number} нового мода, последний: ${i?.mod}`)
	
};

const sv_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} publicerade ${count__number} ny modd, den senaste är ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} publicerade ${count__number} nya moddar, den senaste är ${i?.mod}`)
	
};

const tr_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.actor} ${count__number} yeni mod yayımladı, en yenisi ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${i?.actor} ${count__number} yeni mod yayımladı, en yenisi ${i?.mod}`)
	
};

const zh_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.actor} 发布了 ${count__number} 个新模组，最新的是 ${i?.mod}`)
};

const ja_emails_notify_item_creator_mod_published_many = /** @type {(inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.actor} さんが ${count__number} 件の新しい MOD を公開しました（最新は ${i?.mod}）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{actor} published {count__number} new mod, the latest is {mod}" |
* | * | "{actor} published {count__number} new mods, the latest is {mod}" |
*
* @param {Emails_Notify_Item_Creator_Mod_Published_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_creator_mod_published_many = /** @type {((inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Creator_Mod_Published_ManyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "de") return de_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "fr") return fr_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "it") return it_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "nl") return nl_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "pl") return pl_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "pt") return pt_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "ru") return ru_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "sv") return sv_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "tr") return tr_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "zh") return zh_emails_notify_item_creator_mod_published_many(inputs)
	if (locale === "ja") return ja_emails_notify_item_creator_mod_published_many(inputs)
	return en_emails_notify_item_creator_mod_published_many(inputs)
});
