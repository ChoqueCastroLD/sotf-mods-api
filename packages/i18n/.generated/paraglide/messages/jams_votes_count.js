/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Jams_Votes_CountInputs */

const en_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} vote`);
	return /** @type {LocalizedString} */ (`${count__number} votes`)
	
};

const es_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto`);
	return /** @type {LocalizedString} */ (`${count__number} votos`)
	
};

const de_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Stimme`);
	return /** @type {LocalizedString} */ (`${count__number} Stimmen`)
	
};

const fr_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} vote`);
	return /** @type {LocalizedString} */ (`${count__number} votes`)
	
};

const it_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto`);
	return /** @type {LocalizedString} */ (`${count__number} voti`)
	
};

const nl_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} stem`);
	return /** @type {LocalizedString} */ (`${count__number} stemmen`)
	
};

const pl_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} głos`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} głosy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} głosów`);
	return /** @type {LocalizedString} */ (`${count__number} głosu`)
	
};

const pt_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} voto`);
	return /** @type {LocalizedString} */ (`${count__number} votos`)
	
};

const ru_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} голос`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} голоса`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} голосов`);
	return /** @type {LocalizedString} */ (`${count__number} голоса`)
	
};

const sv_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} röst`);
	return /** @type {LocalizedString} */ (`${count__number} röster`)
	
};

const tr_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} oy`);
	return /** @type {LocalizedString} */ (`${count__number} oy`)
	
};

const zh_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 票`)
};

const ja_jams_votes_count = /** @type {(inputs: Jams_Votes_CountInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 票`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} vote" |
* | * | "{count__number} votes" |
*
* @param {Jams_Votes_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_votes_count = /** @type {((inputs: Jams_Votes_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Votes_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_votes_count(inputs)
	if (locale === "de") return de_jams_votes_count(inputs)
	if (locale === "fr") return fr_jams_votes_count(inputs)
	if (locale === "it") return it_jams_votes_count(inputs)
	if (locale === "nl") return nl_jams_votes_count(inputs)
	if (locale === "pl") return pl_jams_votes_count(inputs)
	if (locale === "pt") return pt_jams_votes_count(inputs)
	if (locale === "ru") return ru_jams_votes_count(inputs)
	if (locale === "sv") return sv_jams_votes_count(inputs)
	if (locale === "tr") return tr_jams_votes_count(inputs)
	if (locale === "zh") return zh_jams_votes_count(inputs)
	if (locale === "ja") return ja_jams_votes_count(inputs)
	return en_jams_votes_count(inputs)
});
