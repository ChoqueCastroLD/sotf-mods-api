/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_Drafts_BlockersInputs */

const en_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} thing to fix`);
	return /** @type {LocalizedString} */ (`${count__number} things to fix`)
	
};

const es_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} cosa por corregir`);
	return /** @type {LocalizedString} */ (`${count__number} cosas por corregir`)
	
};

const de_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Punkt zu beheben`);
	return /** @type {LocalizedString} */ (`${count__number} Punkte zu beheben`)
	
};

const fr_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} point à corriger`);
	return /** @type {LocalizedString} */ (`${count__number} points à corriger`)
	
};

const it_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} cosa da correggere`);
	return /** @type {LocalizedString} */ (`${count__number} cose da correggere`)
	
};

const nl_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} punt om op te lossen`);
	return /** @type {LocalizedString} */ (`${count__number} punten om op te lossen`)
	
};

const pl_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rzecz do poprawy`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} rzeczy do poprawy`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} rzeczy do poprawy`);
	return /** @type {LocalizedString} */ (`${count__number} rzeczy do poprawy`)
	
};

const pt_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} coisa para corrigir`);
	return /** @type {LocalizedString} */ (`${count__number} coisas para corrigir`)
	
};

const ru_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} проблема`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} проблемы`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} проблем`);
	return /** @type {LocalizedString} */ (`${count__number} проблемы`)
	
};

const sv_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sak att åtgärda`);
	return /** @type {LocalizedString} */ (`${count__number} saker att åtgärda`)
	
};

const tr_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Düzeltilecek ${count__number} şey`);
	return /** @type {LocalizedString} */ (`Düzeltilecek ${count__number} şey`)
	
};

const zh_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 项待修正`)
};

const ja_upload_drafts_blockers = /** @type {(inputs: Upload_Drafts_BlockersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`要修正 ${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} thing to fix" |
* | * | "{count__number} things to fix" |
*
* @param {Upload_Drafts_BlockersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_drafts_blockers = /** @type {((inputs: Upload_Drafts_BlockersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_BlockersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_drafts_blockers(inputs)
	if (locale === "de") return de_upload_drafts_blockers(inputs)
	if (locale === "fr") return fr_upload_drafts_blockers(inputs)
	if (locale === "it") return it_upload_drafts_blockers(inputs)
	if (locale === "nl") return nl_upload_drafts_blockers(inputs)
	if (locale === "pl") return pl_upload_drafts_blockers(inputs)
	if (locale === "pt") return pt_upload_drafts_blockers(inputs)
	if (locale === "ru") return ru_upload_drafts_blockers(inputs)
	if (locale === "sv") return sv_upload_drafts_blockers(inputs)
	if (locale === "tr") return tr_upload_drafts_blockers(inputs)
	if (locale === "zh") return zh_upload_drafts_blockers(inputs)
	if (locale === "ja") return ja_upload_drafts_blockers(inputs)
	return en_upload_drafts_blockers(inputs)
});
