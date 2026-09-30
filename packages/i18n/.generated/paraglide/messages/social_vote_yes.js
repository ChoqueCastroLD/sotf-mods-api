/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Social_Vote_YesInputs */

const en_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Yes, helpful (${count__number} vote)`);
	return /** @type {LocalizedString} */ (`Yes, helpful (${count__number} votes)`)
	
};

const es_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sí, útil (${count__number} voto)`);
	return /** @type {LocalizedString} */ (`Sí, útil (${count__number} votos)`)
	
};

const de_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ja, hilfreich (${count__number} Stimme)`);
	return /** @type {LocalizedString} */ (`Ja, hilfreich (${count__number} Stimmen)`)
	
};

const fr_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Oui, utile (${count__number} vote)`);
	return /** @type {LocalizedString} */ (`Oui, utile (${count__number} votes)`)
	
};

const it_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sì, utile (${count__number} voto)`);
	return /** @type {LocalizedString} */ (`Sì, utile (${count__number} voti)`)
	
};

const nl_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ja, nuttig (${count__number} stem)`);
	return /** @type {LocalizedString} */ (`Ja, nuttig (${count__number} stemmen)`)
	
};

const pl_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tak, pomocna (${count__number} głos)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Tak, pomocna (${count__number} głosy)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Tak, pomocna (${count__number} głosów)`);
	return /** @type {LocalizedString} */ (`Tak, pomocna (${count__number} głosu)`)
	
};

const pt_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sim, útil (${count__number} voto)`);
	return /** @type {LocalizedString} */ (`Sim, útil (${count__number} votos)`)
	
};

const ru_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Да, полезно (${count__number} голос)`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Да, полезно (${count__number} голоса)`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Да, полезно (${count__number} голосов)`);
	return /** @type {LocalizedString} */ (`Да, полезно (${count__number} голоса)`)
	
};

const sv_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ja, hjälpsam (${count__number} röst)`);
	return /** @type {LocalizedString} */ (`Ja, hjälpsam (${count__number} röster)`)
	
};

const tr_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Evet, faydalı (${count__number} oy)`);
	return /** @type {LocalizedString} */ (`Evet, faydalı (${count__number} oy)`)
	
};

const zh_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`是，有帮助（${count__number} 票）`)
};

const ja_social_vote_yes = /** @type {(inputs: Social_Vote_YesInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`はい、参考になった（${count__number} 票）`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Yes, helpful ({count__number} vote)" |
* | * | "Yes, helpful ({count__number} votes)" |
*
* @param {Social_Vote_YesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_vote_yes = /** @type {((inputs: Social_Vote_YesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Vote_YesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_vote_yes(inputs)
	if (locale === "de") return de_social_vote_yes(inputs)
	if (locale === "fr") return fr_social_vote_yes(inputs)
	if (locale === "it") return it_social_vote_yes(inputs)
	if (locale === "nl") return nl_social_vote_yes(inputs)
	if (locale === "pl") return pl_social_vote_yes(inputs)
	if (locale === "pt") return pt_social_vote_yes(inputs)
	if (locale === "ru") return ru_social_vote_yes(inputs)
	if (locale === "sv") return sv_social_vote_yes(inputs)
	if (locale === "tr") return tr_social_vote_yes(inputs)
	if (locale === "zh") return zh_social_vote_yes(inputs)
	if (locale === "ja") return ja_social_vote_yes(inputs)
	return en_social_vote_yes(inputs)
});
