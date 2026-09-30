/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, display: NonNullable<unknown> }} Basecamp_Milestone_To_GoInputs */

const en_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} download to go`);
	return /** @type {LocalizedString} */ (`${i?.display} downloads to go`)
	
};

const es_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`falta ${i?.display} descarga`);
	return /** @type {LocalizedString} */ (`faltan ${i?.display} descargas`)
	
};

const de_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`noch ${i?.display} Download`);
	return /** @type {LocalizedString} */ (`noch ${i?.display} Downloads`)
	
};

const fr_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`encore ${i?.display} téléchargement`);
	return /** @type {LocalizedString} */ (`encore ${i?.display} téléchargements`)
	
};

const it_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`manca ${i?.display} download`);
	return /** @type {LocalizedString} */ (`mancano ${i?.display} download`)
	
};

const nl_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`nog ${i?.display} download`);
	return /** @type {LocalizedString} */ (`nog ${i?.display} downloads`)
	
};

const pl_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`zostało ${i?.display} pobranie`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`zostały ${i?.display} pobrania`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`zostało ${i?.display} pobrań`);
	return /** @type {LocalizedString} */ (`zostało ${i?.display} pobrania`)
	
};

const pt_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`falta ${i?.display} download`);
	return /** @type {LocalizedString} */ (`faltam ${i?.display} downloads`)
	
};

const ru_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`осталась ${i?.display} загрузка`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`осталось ${i?.display} загрузки`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`осталось ${i?.display} загрузок`);
	return /** @type {LocalizedString} */ (`осталось ${i?.display} загрузки`)
	
};

const sv_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} nedladdning kvar`);
	return /** @type {LocalizedString} */ (`${i?.display} nedladdningar kvar`)
	
};

const tr_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.display} indirme kaldı`);
	return /** @type {LocalizedString} */ (`${i?.display} indirme kaldı`)
	
};

const zh_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});return /** @type {LocalizedString} */ (`还差 ${i?.display} 次下载`)
};

const ja_basecamp_milestone_to_go = /** @type {(inputs: Basecamp_Milestone_To_GoInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});return /** @type {LocalizedString} */ (`あと ${i?.display} ダウンロード`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{display} download to go" |
* | * | "{display} downloads to go" |
*
* @param {Basecamp_Milestone_To_GoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_milestone_to_go = /** @type {((inputs: Basecamp_Milestone_To_GoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Milestone_To_GoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_milestone_to_go(inputs)
	if (locale === "de") return de_basecamp_milestone_to_go(inputs)
	if (locale === "fr") return fr_basecamp_milestone_to_go(inputs)
	if (locale === "it") return it_basecamp_milestone_to_go(inputs)
	if (locale === "nl") return nl_basecamp_milestone_to_go(inputs)
	if (locale === "pl") return pl_basecamp_milestone_to_go(inputs)
	if (locale === "pt") return pt_basecamp_milestone_to_go(inputs)
	if (locale === "ru") return ru_basecamp_milestone_to_go(inputs)
	if (locale === "sv") return sv_basecamp_milestone_to_go(inputs)
	if (locale === "tr") return tr_basecamp_milestone_to_go(inputs)
	if (locale === "zh") return zh_basecamp_milestone_to_go(inputs)
	if (locale === "ja") return ja_basecamp_milestone_to_go(inputs)
	return en_basecamp_milestone_to_go(inputs)
});
