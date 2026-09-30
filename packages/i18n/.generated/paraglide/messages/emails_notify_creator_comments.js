/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Emails_Notify_Creator_CommentsInputs */

const en_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new comment`);
	return /** @type {LocalizedString} */ (`${count__number} new comments`)
	
};

const es_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario nuevo`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios nuevos`)
	
};

const de_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neuer Kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} neue Kommentare`)
	
};

const fr_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouveau commentaire`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux commentaires`)
	
};

const it_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuovo commento`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi commenti`)
	
};

const nl_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe reactie`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe reacties`)
	
};

const pl_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowy komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych komentarzy`);
	return /** @type {LocalizedString} */ (`${count__number} nowego komentarza`)
	
};

const pt_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} novo comentário`);
	return /** @type {LocalizedString} */ (`${count__number} novos comentários`)
	
};

const ru_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых комментариев`);
	return /** @type {LocalizedString} */ (`${count__number} нового комментария`)
	
};

const sv_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} nya kommentarer`)
	
};

const tr_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yeni yorum`);
	return /** @type {LocalizedString} */ (`${count__number} yeni yorum`)
	
};

const zh_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条新评论`)
};

const ja_emails_notify_creator_comments = /** @type {(inputs: Emails_Notify_Creator_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`新しいコメント ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment" |
* | * | "{count__number} new comments" |
*
* @param {Emails_Notify_Creator_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_comments = /** @type {((inputs: Emails_Notify_Creator_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_comments(inputs)
	if (locale === "de") return de_emails_notify_creator_comments(inputs)
	if (locale === "fr") return fr_emails_notify_creator_comments(inputs)
	if (locale === "it") return it_emails_notify_creator_comments(inputs)
	if (locale === "nl") return nl_emails_notify_creator_comments(inputs)
	if (locale === "pl") return pl_emails_notify_creator_comments(inputs)
	if (locale === "pt") return pt_emails_notify_creator_comments(inputs)
	if (locale === "ru") return ru_emails_notify_creator_comments(inputs)
	if (locale === "sv") return sv_emails_notify_creator_comments(inputs)
	if (locale === "tr") return tr_emails_notify_creator_comments(inputs)
	if (locale === "zh") return zh_emails_notify_creator_comments(inputs)
	if (locale === "ja") return ja_emails_notify_creator_comments(inputs)
	return en_emails_notify_creator_comments(inputs)
});
