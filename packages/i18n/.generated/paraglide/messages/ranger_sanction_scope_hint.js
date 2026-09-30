/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_Scope_HintInputs */

const en_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leave empty to mute comments everywhere.`)
};

const es_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Déjalo vacío para silenciar sus comentarios en todo el sitio.`)
};

const de_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer lassen, um Kommentare überall stummzuschalten.`)
};

const fr_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laissez vide pour rendre muet partout.`)
};

const it_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lascia vuoto per silenziare i commenti ovunque.`)
};

const nl_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laat leeg om reacties overal te dempen.`)
};

const pl_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zostaw puste, aby wyciszyć komentarze wszędzie.`)
};

const pt_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deixe vazio para silenciar em todo o site.`)
};

const ru_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оставьте пустым, чтобы запретить комментарии везде.`)
};

const sv_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lämna tomt för att tysta kommentarer överallt.`)
};

const tr_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her yerde susturmak için boş bırakın.`)
};

const zh_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`留空则全站禁止评论。`)
};

const ja_ranger_sanction_scope_hint = /** @type {(inputs: Ranger_Sanction_Scope_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`空欄にすると全体でコメント禁止になります。`)
};

/**
* | output |
* | --- |
* | "Leave empty to mute comments everywhere." |
*
* @param {Ranger_Sanction_Scope_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_scope_hint = /** @type {((inputs?: Ranger_Sanction_Scope_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Scope_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_scope_hint(inputs)
	if (locale === "de") return de_ranger_sanction_scope_hint(inputs)
	if (locale === "fr") return fr_ranger_sanction_scope_hint(inputs)
	if (locale === "it") return it_ranger_sanction_scope_hint(inputs)
	if (locale === "nl") return nl_ranger_sanction_scope_hint(inputs)
	if (locale === "pl") return pl_ranger_sanction_scope_hint(inputs)
	if (locale === "pt") return pt_ranger_sanction_scope_hint(inputs)
	if (locale === "ru") return ru_ranger_sanction_scope_hint(inputs)
	if (locale === "sv") return sv_ranger_sanction_scope_hint(inputs)
	if (locale === "tr") return tr_ranger_sanction_scope_hint(inputs)
	if (locale === "zh") return zh_ranger_sanction_scope_hint(inputs)
	if (locale === "ja") return ja_ranger_sanction_scope_hint(inputs)
	return en_ranger_sanction_scope_hint(inputs)
});
