/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_DuplicateInputs */

const en_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You already reported this mod. The rangers have it.`)
};

const es_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya denunciaste este mod. Los rangers lo tienen.`)
};

const de_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast diesen Mod schon gemeldet. Die Ranger kümmern sich darum.`)
};

const fr_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez déjà signalé ce mod. Les rangers s’en occupent.`)
};

const it_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hai già segnalato questa mod. I ranger ci stanno lavorando.`)
};

const nl_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt deze mod al gerapporteerd. De rangers zijn ermee bezig.`)
};

const pl_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten mod został już przez ciebie zgłoszony. Rangerzy się tym zajmują.`)
};

const pt_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você já denunciou este mod. Os rangers estão cuidando disso.`)
};

const ru_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы уже жаловались на этот мод. Рейнджеры в курсе.`)
};

const sv_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har redan anmält den här moden. Rangers har den.`)
};

const tr_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu modu zaten şikâyet ettin. Korucular ilgileniyor.`)
};

const zh_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已经举报过此模组，护林员正在处理。`)
};

const ja_mod_report_duplicate = /** @type {(inputs: Mod_Report_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この MOD はすでに通報済みです。レンジャーが対応中です。`)
};

/**
* | output |
* | --- |
* | "You already reported this mod. The rangers have it." |
*
* @param {Mod_Report_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_duplicate = /** @type {((inputs?: Mod_Report_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_duplicate(inputs)
	if (locale === "de") return de_mod_report_duplicate(inputs)
	if (locale === "fr") return fr_mod_report_duplicate(inputs)
	if (locale === "it") return it_mod_report_duplicate(inputs)
	if (locale === "nl") return nl_mod_report_duplicate(inputs)
	if (locale === "pl") return pl_mod_report_duplicate(inputs)
	if (locale === "pt") return pt_mod_report_duplicate(inputs)
	if (locale === "ru") return ru_mod_report_duplicate(inputs)
	if (locale === "sv") return sv_mod_report_duplicate(inputs)
	if (locale === "tr") return tr_mod_report_duplicate(inputs)
	if (locale === "zh") return zh_mod_report_duplicate(inputs)
	if (locale === "ja") return ja_mod_report_duplicate(inputs)
	return en_mod_report_duplicate(inputs)
});
