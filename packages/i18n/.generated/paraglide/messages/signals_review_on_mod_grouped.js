/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Review_On_Mod_GroupedInputs */

const en_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} new review on ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} new reviews on ${i?.mod}`)
	
};

const es_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reseña nueva en ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} reseñas nuevas en ${i?.mod}`)
	
};

const de_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} neue Bewertung zu ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} neue Bewertungen zu ${i?.mod}`)
	
};

const fr_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nouvel avis sur ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nouveaux avis sur ${i?.mod}`)
	
};

const it_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nuova recensione su ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nuove recensioni su ${i?.mod}`)
	
};

const nl_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nieuwe review van ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nieuwe reviews van ${i?.mod}`)
	
};

const pl_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nowa recenzja ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} nowe recenzje ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} nowych recenzji ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nowej recenzji ${i?.mod}`)
	
};

const pt_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nova avaliação em ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} novas avaliações em ${i?.mod}`)
	
};

const ru_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} новый отзыв о ${i?.mod}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} новых отзыва о ${i?.mod}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} новых отзывов о ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} нового отзыва о ${i?.mod}`)
	
};

const sv_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ny recension av ${i?.mod}`);
	return /** @type {LocalizedString} */ (`${count__number} nya recensioner av ${i?.mod}`)
	
};

const tr_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni inceleme`);
	return /** @type {LocalizedString} */ (`${i?.mod} için ${count__number} yeni inceleme`)
	
};

const zh_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} 有 ${count__number} 条新评价`)
};

const ja_signals_review_on_mod_grouped = /** @type {(inputs: Signals_Review_On_Mod_GroupedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.mod} に新しいレビュー ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new review on {mod}" |
* | * | "{count__number} new reviews on {mod}" |
*
* @param {Signals_Review_On_Mod_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_review_on_mod_grouped = /** @type {((inputs: Signals_Review_On_Mod_GroupedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Review_On_Mod_GroupedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_review_on_mod_grouped(inputs)
	if (locale === "de") return de_signals_review_on_mod_grouped(inputs)
	if (locale === "fr") return fr_signals_review_on_mod_grouped(inputs)
	if (locale === "it") return it_signals_review_on_mod_grouped(inputs)
	if (locale === "nl") return nl_signals_review_on_mod_grouped(inputs)
	if (locale === "pl") return pl_signals_review_on_mod_grouped(inputs)
	if (locale === "pt") return pt_signals_review_on_mod_grouped(inputs)
	if (locale === "ru") return ru_signals_review_on_mod_grouped(inputs)
	if (locale === "sv") return sv_signals_review_on_mod_grouped(inputs)
	if (locale === "tr") return tr_signals_review_on_mod_grouped(inputs)
	if (locale === "zh") return zh_signals_review_on_mod_grouped(inputs)
	if (locale === "ja") return ja_signals_review_on_mod_grouped(inputs)
	return en_signals_review_on_mod_grouped(inputs)
});
