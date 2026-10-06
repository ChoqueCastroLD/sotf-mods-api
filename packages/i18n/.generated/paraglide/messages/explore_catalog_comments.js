/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Catalog_CommentsInputs */

const en_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comment`);
	return /** @type {LocalizedString} */ (`${count__number} comments`)
	
};

const es_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios`)
	
};

const de_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} Kommentare`)
	
};

const fr_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commentaire`);
	return /** @type {LocalizedString} */ (`${count__number} commentaires`)
	
};

const it_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commento`);
	return /** @type {LocalizedString} */ (`${count__number} commenti`)
	
};

const nl_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reactie`);
	return /** @type {LocalizedString} */ (`${count__number} reacties`)
	
};

const pl_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} komentarzy`);
	return /** @type {LocalizedString} */ (`${count__number} komentarza`)
	
};

const pt_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentário`);
	return /** @type {LocalizedString} */ (`${count__number} comentários`)
	
};

const ru_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} комментариев`);
	return /** @type {LocalizedString} */ (`${count__number} комментария`)
	
};

const sv_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} kommentarer`)
	
};

const tr_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yorum`);
	return /** @type {LocalizedString} */ (`${count__number} yorum`)
	
};

const zh_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条评论`)
};

const ja_explore_catalog_comments = /** @type {(inputs: Explore_Catalog_CommentsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number}件のコメント`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} comment" |
* | * | "{count__number} comments" |
*
* @param {Explore_Catalog_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_comments = /** @type {((inputs: Explore_Catalog_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_comments(inputs)
	if (locale === "de") return de_explore_catalog_comments(inputs)
	if (locale === "fr") return fr_explore_catalog_comments(inputs)
	if (locale === "it") return it_explore_catalog_comments(inputs)
	if (locale === "nl") return nl_explore_catalog_comments(inputs)
	if (locale === "pl") return pl_explore_catalog_comments(inputs)
	if (locale === "pt") return pt_explore_catalog_comments(inputs)
	if (locale === "ru") return ru_explore_catalog_comments(inputs)
	if (locale === "sv") return sv_explore_catalog_comments(inputs)
	if (locale === "tr") return tr_explore_catalog_comments(inputs)
	if (locale === "zh") return zh_explore_catalog_comments(inputs)
	if (locale === "ja") return ja_explore_catalog_comments(inputs)
	return en_explore_catalog_comments(inputs)
});
