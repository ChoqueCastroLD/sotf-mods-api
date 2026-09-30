/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Hide_HintInputs */

const en_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods and kits are unlisted, versions held, comments and reviews hidden.`)
};

const es_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mods y kits dejan de listarse, las versiones se retienen y los comentarios y reseñas se ocultan.`)
};

const de_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods und Kits werden nicht mehr gelistet, Versionen zurückgehalten, Kommentare und Rezensionen ausgeblendet.`)
};

const fr_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les mods et kits sont retirés des listes, les versions retenues, les commentaires et avis masqués.`)
};

const it_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod e kit escono dagli elenchi, le versioni vengono trattenute, commenti e recensioni nascosti.`)
};

const nl_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods en kits worden uit de lijsten gehaald, versies tegengehouden, reacties en recensies verborgen.`)
};

const pl_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody i zestawy znikają z list, wersje zostają wstrzymane, komentarze i recenzje ukryte.`)
};

const pt_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods e kits saem das listas, versões ficam retidas, comentários e avaliações são ocultados.`)
};

const ru_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды и наборы убираются из списков, версии задерживаются, комментарии и отзывы скрываются.`)
};

const sv_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar och kit tas bort ur listorna, versioner hålls kvar, kommentarer och recensioner döljs.`)
};

const tr_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlar ve kitler listelerden kalkar, sürümler bekletilir, yorumlar ve incelemeler gizlenir.`)
};

const zh_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组和套装从列表隐藏，版本被暂扣，评论和评价被隐藏。`)
};

const ja_ranger_report_hide_hint = /** @type {(inputs: Ranger_Report_Hide_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODとキットは一覧から外れ、バージョンは保留、コメントとレビューは非表示になります。`)
};

/**
* | output |
* | --- |
* | "Mods and kits are unlisted, versions held, comments and reviews hidden." |
*
* @param {Ranger_Report_Hide_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_hide_hint = /** @type {((inputs?: Ranger_Report_Hide_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Hide_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_hide_hint(inputs)
	if (locale === "de") return de_ranger_report_hide_hint(inputs)
	if (locale === "fr") return fr_ranger_report_hide_hint(inputs)
	if (locale === "it") return it_ranger_report_hide_hint(inputs)
	if (locale === "nl") return nl_ranger_report_hide_hint(inputs)
	if (locale === "pl") return pl_ranger_report_hide_hint(inputs)
	if (locale === "pt") return pt_ranger_report_hide_hint(inputs)
	if (locale === "ru") return ru_ranger_report_hide_hint(inputs)
	if (locale === "sv") return sv_ranger_report_hide_hint(inputs)
	if (locale === "tr") return tr_ranger_report_hide_hint(inputs)
	if (locale === "zh") return zh_ranger_report_hide_hint(inputs)
	if (locale === "ja") return ja_ranger_report_hide_hint(inputs)
	return en_ranger_report_hide_hint(inputs)
});
