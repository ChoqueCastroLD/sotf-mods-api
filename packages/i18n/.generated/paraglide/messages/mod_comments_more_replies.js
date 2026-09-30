/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Comments_More_RepliesInputs */

const en_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} more reply`);
	return /** @type {LocalizedString} */ (`${count__number} more replies`)
	
};

const es_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} respuesta más`);
	return /** @type {LocalizedString} */ (`${count__number} respuestas más`)
	
};

const de_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} weitere Antwort`);
	return /** @type {LocalizedString} */ (`${count__number} weitere Antworten`)
	
};

const fr_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} autre réponse`);
	return /** @type {LocalizedString} */ (`${count__number} autres réponses`)
	
};

const it_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Un’altra risposta`);
	return /** @type {LocalizedString} */ (`Altre ${count__number} risposte`)
	
};

const nl_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} antwoord`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} antwoorden`)
	
};

const pl_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} odpowiedź`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} odpowiedzi`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} odpowiedzi`);
	return /** @type {LocalizedString} */ (`Jeszcze ${count__number} odpowiedzi`)
	
};

const pt_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mais ${count__number} resposta`);
	return /** @type {LocalizedString} */ (`Mais ${count__number} respostas`)
	
};

const ru_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ещё ${count__number} ответ`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ещё ${count__number} ответа`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ещё ${count__number} ответов`);
	return /** @type {LocalizedString} */ (`Ещё ${count__number} ответа`)
	
};

const sv_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} svar till`);
	return /** @type {LocalizedString} */ (`${count__number} svar till`)
	
};

const tr_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yanıt daha`);
	return /** @type {LocalizedString} */ (`${count__number} yanıt daha`)
	
};

const zh_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`还有 ${count__number} 条回复`)
};

const ja_mod_comments_more_replies = /** @type {(inputs: Mod_Comments_More_RepliesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほか ${count__number} 件の返信`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} more reply" |
* | * | "{count__number} more replies" |
*
* @param {Mod_Comments_More_RepliesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_comments_more_replies = /** @type {((inputs: Mod_Comments_More_RepliesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_More_RepliesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_comments_more_replies(inputs)
	if (locale === "de") return de_mod_comments_more_replies(inputs)
	if (locale === "fr") return fr_mod_comments_more_replies(inputs)
	if (locale === "it") return it_mod_comments_more_replies(inputs)
	if (locale === "nl") return nl_mod_comments_more_replies(inputs)
	if (locale === "pl") return pl_mod_comments_more_replies(inputs)
	if (locale === "pt") return pt_mod_comments_more_replies(inputs)
	if (locale === "ru") return ru_mod_comments_more_replies(inputs)
	if (locale === "sv") return sv_mod_comments_more_replies(inputs)
	if (locale === "tr") return tr_mod_comments_more_replies(inputs)
	if (locale === "zh") return zh_mod_comments_more_replies(inputs)
	if (locale === "ja") return ja_mod_comments_more_replies(inputs)
	return en_mod_comments_more_replies(inputs)
});
