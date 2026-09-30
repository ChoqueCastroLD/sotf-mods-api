/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Comments_TitleInputs */

const en_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("en", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Comments`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comment`);
	return /** @type {LocalizedString} */ (`${count__number} comments`)
	
};

const es_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("es", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Comentarios`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios`)
	
};

const de_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("de", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Kommentare`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} Kommentare`)
	
};

const fr_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("fr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Commentaires`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commentaire`);
	return /** @type {LocalizedString} */ (`${count__number} commentaires`)
	
};

const it_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("it", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Commenti`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} commento`);
	return /** @type {LocalizedString} */ (`${count__number} commenti`)
	
};

const nl_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("nl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Reacties`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reactie`);
	return /** @type {LocalizedString} */ (`${count__number} reacties`)
	
};

const pl_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pl", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Komentarze`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} komentarz`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} komentarze`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} komentarzy`);
	return /** @type {LocalizedString} */ (`${count__number} komentarzy`)
	
};

const pt_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("pt", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Comentários`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentário`);
	return /** @type {LocalizedString} */ (`${count__number} comentários`)
	
};

const ru_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ru", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Комментарии`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} комментарий`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} комментария`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} комментариев`);
	return /** @type {LocalizedString} */ (`${count__number} комментария`)
	
};

const sv_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("sv", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Kommentarer`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} kommentar`);
	return /** @type {LocalizedString} */ (`${count__number} kommentarer`)
	
};

const tr_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("tr", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`Yorumlar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yorum`);
	return /** @type {LocalizedString} */ (`${count__number} yorum`)
	
};

const zh_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("zh", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`评论`);
	return /** @type {LocalizedString} */ (`${count__number} 条评论`)
	
};

const ja_mod_comments_title = /** @type {(inputs: Mod_Comments_TitleInputs) => LocalizedString} */ (i) => {const count__exact = registry.number("ja", i?.count, { maximumFractionDigits: 20 });
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	if (count__exact === "0") return /** @type {LocalizedString} */ (`コメント`);
	return /** @type {LocalizedString} */ (`コメント ${count__number} 件`)
	
};

/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Comments" |
* | * | "one" | "{count__number} comment" |
* | * | * | "{count__number} comments" |
*
* @param {Mod_Comments_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_comments_title = /** @type {((inputs: Mod_Comments_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_comments_title(inputs)
	if (locale === "de") return de_mod_comments_title(inputs)
	if (locale === "fr") return fr_mod_comments_title(inputs)
	if (locale === "it") return it_mod_comments_title(inputs)
	if (locale === "nl") return nl_mod_comments_title(inputs)
	if (locale === "pl") return pl_mod_comments_title(inputs)
	if (locale === "pt") return pt_mod_comments_title(inputs)
	if (locale === "ru") return ru_mod_comments_title(inputs)
	if (locale === "sv") return sv_mod_comments_title(inputs)
	if (locale === "tr") return tr_mod_comments_title(inputs)
	if (locale === "zh") return zh_mod_comments_title(inputs)
	if (locale === "ja") return ja_mod_comments_title(inputs)
	return en_mod_comments_title(inputs)
});
