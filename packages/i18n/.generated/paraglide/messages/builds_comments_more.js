/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Builds_Comments_MoreInputs */

const en_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} more comment`);
	return /** @type {LocalizedString} */ (`${count__number} more comments`)
	
};

const es_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario más`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios más`)
	
};

const de_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} weiterer Kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} weitere Kommentare`)
	
};

const fr_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} autre commentaire`);
	return /** @type {LocalizedString} */ (`${count__number} autres commentaires`)
	
};

const it_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ancora ${count__number} commento`);
	return /** @type {LocalizedString} */ (`Altri ${count__number} commenti`)
	
};

const nl_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} reactie`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} reacties`)
	
};

const pl_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} komentarzy`);
	return /** @type {LocalizedString} */ (`Jeszcze ${count__number} komentarza`)
	
};

const pt_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mais ${count__number} comentário`);
	return /** @type {LocalizedString} */ (`Mais ${count__number} comentários`)
	
};

const ru_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ещё ${count__number} комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ещё ${count__number} комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ещё ${count__number} комментариев`);
	return /** @type {LocalizedString} */ (`Ещё ${count__number} комментария`)
	
};

const sv_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kommentar till`);
	return /** @type {LocalizedString} */ (`${count__number} kommentarer till`)
	
};

const tr_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yorum daha`);
	return /** @type {LocalizedString} */ (`${count__number} yorum daha`)
	
};

const zh_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 条评论`)
};

const ja_builds_comments_more = /** @type {(inputs: Builds_Comments_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほかにコメント ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} more comment" |
* | * | "{count__number} more comments" |
*
* @param {Builds_Comments_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_comments_more = /** @type {((inputs: Builds_Comments_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Comments_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_comments_more(inputs)
	if (locale === "de") return de_builds_comments_more(inputs)
	if (locale === "fr") return fr_builds_comments_more(inputs)
	if (locale === "it") return it_builds_comments_more(inputs)
	if (locale === "nl") return nl_builds_comments_more(inputs)
	if (locale === "pl") return pl_builds_comments_more(inputs)
	if (locale === "pt") return pt_builds_comments_more(inputs)
	if (locale === "ru") return ru_builds_comments_more(inputs)
	if (locale === "sv") return sv_builds_comments_more(inputs)
	if (locale === "tr") return tr_builds_comments_more(inputs)
	if (locale === "zh") return zh_builds_comments_more(inputs)
	if (locale === "ja") return ja_builds_comments_more(inputs)
	return en_builds_comments_more(inputs)
});
