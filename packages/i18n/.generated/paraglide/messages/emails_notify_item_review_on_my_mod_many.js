/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Emails_Notify_Item_Review_On_My_Mod_ManyInputs */

const en_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new review of ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} new reviews of ${i?.mod}`)
	
};

const es_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña nueva de ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas nuevas de ${i?.mod}`)
	
};

const de_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Bewertung von ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Bewertungen von ${i?.mod}`)
	
};

const fr_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvel avis sur ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux avis sur ${i?.mod}`)
	
};

const it_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova recensione di ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nuove recensioni di ${i?.mod}`)
	
};

const nl_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe beoordeling van ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe beoordelingen van ${i?.mod}`)
	
};

const pl_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowa recenzja ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe recenzje ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych recenzji ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nowej recenzji ${i?.mod}`)
	
};

const pt_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova avaliação de ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} novas avaliações de ${i?.mod}`)
	
};

const ru_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый отзыв о ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых отзыва о ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых отзывов о ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} нового отзыва о ${i?.mod}`)
	
};

const sv_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny recension av ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nya recensioner av ${i?.mod}`)
	
};

const tr_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni inceleme`);
	return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni inceleme`)
	
};

const zh_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} 有 ${count__number} 条新评价`)
};

const ja_emails_notify_item_review_on_my_mod_many = /** @type {(inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} に ${count__number} 件の新しいレビュー`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new review of {mod}" |
* | * | "{count__number} new reviews of {mod}" |
*
* @param {Emails_Notify_Item_Review_On_My_Mod_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_item_review_on_my_mod_many = /** @type {((inputs: Emails_Notify_Item_Review_On_My_Mod_ManyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_On_My_Mod_ManyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "de") return de_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "fr") return fr_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "it") return it_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "nl") return nl_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "pl") return pl_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "pt") return pt_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "ru") return ru_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "sv") return sv_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "tr") return tr_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "zh") return zh_emails_notify_item_review_on_my_mod_many(inputs)
	if (locale === "ja") return ja_emails_notify_item_review_on_my_mod_many(inputs)
	return en_emails_notify_item_review_on_my_mod_many(inputs)
});
