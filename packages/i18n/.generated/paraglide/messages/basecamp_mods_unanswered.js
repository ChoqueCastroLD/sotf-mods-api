/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Mods_UnansweredInputs */

const en_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} unanswered`);
	return /** @type {LocalizedString} */ (`${count__number} unanswered`)
	
};

const es_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sin responder`);
	return /** @type {LocalizedString} */ (`${count__number} sin responder`)
	
};

const de_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} unbeantwortet`);
	return /** @type {LocalizedString} */ (`${count__number} unbeantwortet`)
	
};

const fr_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sans réponse`);
	return /** @type {LocalizedString} */ (`${count__number} sans réponse`)
	
};

const it_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} senza risposta`);
	return /** @type {LocalizedString} */ (`${count__number} senza risposta`)
	
};

const nl_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} onbeantwoord`);
	return /** @type {LocalizedString} */ (`${count__number} onbeantwoord`)
	
};

const pl_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} bez odpowiedzi`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} bez odpowiedzi`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} bez odpowiedzi`);
	return /** @type {LocalizedString} */ (`${count__number} bez odpowiedzi`)
	
};

const pt_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sem resposta`);
	return /** @type {LocalizedString} */ (`${count__number} sem resposta`)
	
};

const ru_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} без ответа`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} без ответа`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} без ответа`);
	return /** @type {LocalizedString} */ (`${count__number} без ответа`)
	
};

const sv_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} obesvarad`);
	return /** @type {LocalizedString} */ (`${count__number} obesvarade`)
	
};

const tr_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} yanıtsız`);
	return /** @type {LocalizedString} */ (`${count__number} yanıtsız`)
	
};

const zh_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 条未回复`)
};

const ja_basecamp_mods_unanswered = /** @type {(inputs: Basecamp_Mods_UnansweredInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`未返信 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} unanswered" |
* | * | "{count__number} unanswered" |
*
* @param {Basecamp_Mods_UnansweredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_unanswered = /** @type {((inputs: Basecamp_Mods_UnansweredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_UnansweredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_unanswered(inputs)
	if (locale === "de") return de_basecamp_mods_unanswered(inputs)
	if (locale === "fr") return fr_basecamp_mods_unanswered(inputs)
	if (locale === "it") return it_basecamp_mods_unanswered(inputs)
	if (locale === "nl") return nl_basecamp_mods_unanswered(inputs)
	if (locale === "pl") return pl_basecamp_mods_unanswered(inputs)
	if (locale === "pt") return pt_basecamp_mods_unanswered(inputs)
	if (locale === "ru") return ru_basecamp_mods_unanswered(inputs)
	if (locale === "sv") return sv_basecamp_mods_unanswered(inputs)
	if (locale === "tr") return tr_basecamp_mods_unanswered(inputs)
	if (locale === "zh") return zh_basecamp_mods_unanswered(inputs)
	if (locale === "ja") return ja_basecamp_mods_unanswered(inputs)
	return en_basecamp_mods_unanswered(inputs)
});
