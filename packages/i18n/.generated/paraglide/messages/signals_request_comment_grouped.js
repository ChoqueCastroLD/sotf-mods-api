/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, request: NonNullable<unknown> }} Signals_Request_Comment_GroupedInputs */

const en_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new comment on the request “${i?.request}”`);
	return /** @type {LocalizedString} */ (`${count__number} new comments on the request “${i?.request}”`)
	
};

const es_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} comentario nuevo en la petición «${i?.request}»`);
	return /** @type {LocalizedString} */ (`${count__number} comentarios nuevos en la petición «${i?.request}»`)
	
};

const de_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neuer Kommentar zur Anfrage „${i?.request}“`);
	return /** @type {LocalizedString} */ (`${count__number} neue Kommentare zur Anfrage „${i?.request}“`)
	
};

const fr_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouveau commentaire sur la demande « ${i?.request} »`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux commentaires sur la demande « ${i?.request} »`)
	
};

const it_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuovo commento sulla richiesta «${i?.request}»`);
	return /** @type {LocalizedString} */ (`${count__number} nuovi commenti sulla richiesta «${i?.request}»`)
	
};

const nl_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe reactie op het verzoek “${i?.request}”`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe reacties op het verzoek “${i?.request}”`)
	
};

const pl_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowy komentarz do prośby „${i?.request}”`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe komentarze do prośby „${i?.request}”`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych komentarzy do prośby „${i?.request}”`);
	return /** @type {LocalizedString} */ (`${count__number} nowego komentarza do prośby „${i?.request}”`)
	
};

const pt_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} novo comentário no pedido “${i?.request}”`);
	return /** @type {LocalizedString} */ (`${count__number} novos comentários no pedido “${i?.request}”`)
	
};

const ru_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый комментарий к запросу «${i?.request}»`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых комментария к запросу «${i?.request}»`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых комментариев к запросу «${i?.request}»`);
	return /** @type {LocalizedString} */ (`${count__number} нового комментария к запросу «${i?.request}»`)
	
};

const sv_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny kommentar på förfrågan ”${i?.request}”`);
	return /** @type {LocalizedString} */ (`${count__number} nya kommentarer på förfrågan ”${i?.request}”`)
	
};

const tr_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`“${i?.request}” isteğinde ${count__number} yeni yorum`);
	return /** @type {LocalizedString} */ (`“${i?.request}” isteğinde ${count__number} yeni yorum`)
	
};

const zh_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`请求“${i?.request}”有 ${count__number} 条新评论`)
};

const ja_signals_request_comment_grouped = /** @type {(inputs: Signals_Request_Comment_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`リクエスト「${i?.request}」に新しいコメント ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment on the request “{request}”" |
* | * | "{count__number} new comments on the request “{request}”" |
*
* @param {Signals_Request_Comment_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_request_comment_grouped = /** @type {((inputs: Signals_Request_Comment_GroupedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Request_Comment_GroupedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_request_comment_grouped(inputs)
	if (locale === "de") return de_signals_request_comment_grouped(inputs)
	if (locale === "fr") return fr_signals_request_comment_grouped(inputs)
	if (locale === "it") return it_signals_request_comment_grouped(inputs)
	if (locale === "nl") return nl_signals_request_comment_grouped(inputs)
	if (locale === "pl") return pl_signals_request_comment_grouped(inputs)
	if (locale === "pt") return pt_signals_request_comment_grouped(inputs)
	if (locale === "ru") return ru_signals_request_comment_grouped(inputs)
	if (locale === "sv") return sv_signals_request_comment_grouped(inputs)
	if (locale === "tr") return tr_signals_request_comment_grouped(inputs)
	if (locale === "zh") return zh_signals_request_comment_grouped(inputs)
	if (locale === "ja") return ja_signals_request_comment_grouped(inputs)
	return en_signals_request_comment_grouped(inputs)
});
