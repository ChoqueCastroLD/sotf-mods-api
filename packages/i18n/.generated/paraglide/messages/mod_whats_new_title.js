/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Mod_Whats_New_TitleInputs */

const en_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`What’s new since your last download (v${i?.version})`)
};

const es_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novedades desde tu última descarga (v${i?.version})`)
};

const de_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Neu seit deinem letzten Download (v${i?.version})`)
};

const fr_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nouveautés depuis votre dernier téléchargement (v${i?.version})`)
};

const it_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novità dal tuo ultimo download (v${i?.version})`)
};

const nl_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nieuw sinds je laatste download (v${i?.version})`)
};

const pl_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Co nowego od twojego ostatniego pobrania (v${i?.version})`)
};

const pt_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Novidades desde o seu último download (v${i?.version})`)
};

const ru_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Что нового с вашей последней загрузки (v${i?.version})`)
};

const sv_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nytt sedan din senaste nedladdning (v${i?.version})`)
};

const tr_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son indirmenden (v${i?.version}) bu yana yenilikler`)
};

const zh_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自你上次下载（v${i?.version}）以来的更新`)
};

const ja_mod_whats_new_title = /** @type {(inputs: Mod_Whats_New_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前回のダウンロード（v${i?.version}）以降の変更点`)
};

/**
* | output |
* | --- |
* | "What’s new since your last download (v{version})" |
*
* @param {Mod_Whats_New_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_whats_new_title = /** @type {((inputs: Mod_Whats_New_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Whats_New_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_whats_new_title(inputs)
	if (locale === "de") return de_mod_whats_new_title(inputs)
	if (locale === "fr") return fr_mod_whats_new_title(inputs)
	if (locale === "it") return it_mod_whats_new_title(inputs)
	if (locale === "nl") return nl_mod_whats_new_title(inputs)
	if (locale === "pl") return pl_mod_whats_new_title(inputs)
	if (locale === "pt") return pt_mod_whats_new_title(inputs)
	if (locale === "ru") return ru_mod_whats_new_title(inputs)
	if (locale === "sv") return sv_mod_whats_new_title(inputs)
	if (locale === "tr") return tr_mod_whats_new_title(inputs)
	if (locale === "zh") return zh_mod_whats_new_title(inputs)
	if (locale === "ja") return ja_mod_whats_new_title(inputs)
	return en_mod_whats_new_title(inputs)
});
