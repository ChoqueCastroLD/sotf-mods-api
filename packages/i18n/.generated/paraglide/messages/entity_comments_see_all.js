/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Entity_Comments_See_AllInputs */

const en_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Be the first to comment`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Open 1 comment`);
	return /** @type {LocalizedString} */ (`Open all ${count__number} comments`)
	
};

const es_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sé el primero en comentar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Abrir 1 comentario`);
	return /** @type {LocalizedString} */ (`Abrir los ${count__number} comentarios`)
	
};

const de_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Schreibe den ersten Kommentar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 Kommentar öffnen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Kommentare öffnen`)
	
};

const fr_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Soyez le premier à commenter`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ouvrir 1 commentaire`);
	return /** @type {LocalizedString} */ (`Ouvrir les ${count__number} commentaires`)
	
};

const it_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Sii il primo a commentare`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Apri 1 commento`);
	return /** @type {LocalizedString} */ (`Apri tutti i ${count__number} commenti`)
	
};

const nl_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Plaats de eerste reactie`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 reactie openen`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} reacties openen`)
	
};

const pl_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Dodaj pierwszy komentarz`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Otwórz 1 komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Otwórz ${count__number} komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Otwórz ${count__number} komentarzy`);
	return /** @type {LocalizedString} */ (`Otwórz ${count__number} komentarza`)
	
};

const pt_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Seja o primeiro a comentar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Abrir 1 comentário`);
	return /** @type {LocalizedString} */ (`Abrir os ${count__number} comentários`)
	
};

const ru_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Станьте первым, кто прокомментирует`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Открыть ${count__number} комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Открыть ${count__number} комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Открыть ${count__number} комментариев`);
	return /** @type {LocalizedString} */ (`Открыть ${count__number} комментария`)
	
};

const sv_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Skriv den första kommentaren`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Öppna 1 kommentar`);
	return /** @type {LocalizedString} */ (`Öppna alla ${count__number} kommentarer`)
	
};

const tr_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`İlk yorumu sen yaz`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`1 yorumu aç`);
	return /** @type {LocalizedString} */ (`${count__number} yorumun tümünü aç`)
	
};

const zh_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`来写第一条评论吧`);
	return /** @type {LocalizedString} */ (`查看全部 ${count__number} 条评论`)
	
};

const ja_entity_comments_see_all = /** @type {(inputs: Entity_Comments_See_AllInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`最初のコメントを書く`);
	return /** @type {LocalizedString} */ (`${count__number} 件のコメントをすべて開く`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Be the first to comment" |
* | * | "one" | "Open 1 comment" |
* | * | * | "Open all {count__number} comments" |
*
* @param {Entity_Comments_See_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const entity_comments_see_all = /** @type {((inputs: Entity_Comments_See_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Entity_Comments_See_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_entity_comments_see_all(inputs)
	if (locale === "de") return de_entity_comments_see_all(inputs)
	if (locale === "fr") return fr_entity_comments_see_all(inputs)
	if (locale === "it") return it_entity_comments_see_all(inputs)
	if (locale === "nl") return nl_entity_comments_see_all(inputs)
	if (locale === "pl") return pl_entity_comments_see_all(inputs)
	if (locale === "pt") return pt_entity_comments_see_all(inputs)
	if (locale === "ru") return ru_entity_comments_see_all(inputs)
	if (locale === "sv") return sv_entity_comments_see_all(inputs)
	if (locale === "tr") return tr_entity_comments_see_all(inputs)
	if (locale === "zh") return zh_entity_comments_see_all(inputs)
	if (locale === "ja") return ja_entity_comments_see_all(inputs)
	return en_entity_comments_see_all(inputs)
});
