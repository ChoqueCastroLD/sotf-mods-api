/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Upload_New_Drafts_TitleInputs */

const en_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`You have ${count__number} draft in progress.`);
	return /** @type {LocalizedString} */ (`You have ${count__number} drafts in progress.`)
	
};

const es_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tienes ${count__number} borrador en curso.`);
	return /** @type {LocalizedString} */ (`Tienes ${count__number} borradores en curso.`)
	
};

const de_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Du hast ${count__number} Entwurf in Arbeit.`);
	return /** @type {LocalizedString} */ (`Du hast ${count__number} Entwürfe in Arbeit.`)
	
};

const fr_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Vous avez ${count__number} brouillon en cours.`);
	return /** @type {LocalizedString} */ (`Vous avez ${count__number} brouillons en cours.`)
	
};

const it_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Hai ${count__number} bozza in corso.`);
	return /** @type {LocalizedString} */ (`Hai ${count__number} bozze in corso.`)
	
};

const nl_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Je hebt ${count__number} concept in uitvoering.`);
	return /** @type {LocalizedString} */ (`Je hebt ${count__number} concepten in uitvoering.`)
	
};

const pl_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Masz ${count__number} rozpoczęty szkic.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Masz ${count__number} rozpoczęte szkice.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Masz ${count__number} rozpoczętych szkiców.`);
	return /** @type {LocalizedString} */ (`Masz ${count__number} rozpoczętego szkicu.`)
	
};

const pt_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Você tem ${count__number} rascunho em andamento.`);
	return /** @type {LocalizedString} */ (`Você tem ${count__number} rascunhos em andamento.`)
	
};

const ru_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`У вас ${count__number} незаконченный черновик.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`У вас ${count__number} незаконченных черновика.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`У вас ${count__number} незаконченных черновиков.`);
	return /** @type {LocalizedString} */ (`У вас ${count__number} незаконченного черновика.`)
	
};

const sv_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Du har ${count__number} påbörjat utkast.`);
	return /** @type {LocalizedString} */ (`Du har ${count__number} påbörjade utkast.`)
	
};

const tr_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Devam eden ${count__number} taslağın var.`);
	return /** @type {LocalizedString} */ (`Devam eden ${count__number} taslağın var.`)
	
};

const zh_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`你有 ${count__number} 个进行中的草稿。`)
};

const ja_upload_new_drafts_title = /** @type {(inputs: Upload_New_Drafts_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`作成中の下書きが ${count__number} 件あります。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "You have {count__number} draft in progress." |
* | * | "You have {count__number} drafts in progress." |
*
* @param {Upload_New_Drafts_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_drafts_title = /** @type {((inputs: Upload_New_Drafts_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_Drafts_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_drafts_title(inputs)
	if (locale === "de") return de_upload_new_drafts_title(inputs)
	if (locale === "fr") return fr_upload_new_drafts_title(inputs)
	if (locale === "it") return it_upload_new_drafts_title(inputs)
	if (locale === "nl") return nl_upload_new_drafts_title(inputs)
	if (locale === "pl") return pl_upload_new_drafts_title(inputs)
	if (locale === "pt") return pt_upload_new_drafts_title(inputs)
	if (locale === "ru") return ru_upload_new_drafts_title(inputs)
	if (locale === "sv") return sv_upload_new_drafts_title(inputs)
	if (locale === "tr") return tr_upload_new_drafts_title(inputs)
	if (locale === "zh") return zh_upload_new_drafts_title(inputs)
	if (locale === "ja") return ja_upload_new_drafts_title(inputs)
	return en_upload_new_drafts_title(inputs)
});
