/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Safe_Remove_Yes_HintInputs */

const en_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uninstalling leaves saves intact.`)
};

const es_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desinstalarlo deja las partidas intactas.`)
};

const de_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deinstallieren lässt Spielstände unversehrt.`)
};

const fr_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le désinstaller laisse les sauvegardes intactes.`)
};

const it_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disinstallarla lascia intatti i salvataggi.`)
};

const nl_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen laat saves intact.`)
};

const pl_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odinstalowanie nie narusza zapisów.`)
};

const pt_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desinstalar deixa os saves intactos.`)
};

const ru_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удаление не затрагивает сохранения.`)
};

const sv_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avinstallation lämnar sparfiler orörda.`)
};

const tr_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaldırmak kayıtlara zarar vermez.`)
};

const zh_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`卸载后存档保持完好。`)
};

const ja_upload_safe_remove_yes_hint = /** @type {(inputs: Upload_Safe_Remove_Yes_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アンインストールしてもセーブデータは無事です。`)
};

/**
* | output |
* | --- |
* | "Uninstalling leaves saves intact." |
*
* @param {Upload_Safe_Remove_Yes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_safe_remove_yes_hint = /** @type {((inputs?: Upload_Safe_Remove_Yes_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Safe_Remove_Yes_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_safe_remove_yes_hint(inputs)
	if (locale === "de") return de_upload_safe_remove_yes_hint(inputs)
	if (locale === "fr") return fr_upload_safe_remove_yes_hint(inputs)
	if (locale === "it") return it_upload_safe_remove_yes_hint(inputs)
	if (locale === "nl") return nl_upload_safe_remove_yes_hint(inputs)
	if (locale === "pl") return pl_upload_safe_remove_yes_hint(inputs)
	if (locale === "pt") return pt_upload_safe_remove_yes_hint(inputs)
	if (locale === "ru") return ru_upload_safe_remove_yes_hint(inputs)
	if (locale === "sv") return sv_upload_safe_remove_yes_hint(inputs)
	if (locale === "tr") return tr_upload_safe_remove_yes_hint(inputs)
	if (locale === "zh") return zh_upload_safe_remove_yes_hint(inputs)
	if (locale === "ja") return ja_upload_safe_remove_yes_hint(inputs)
	return en_upload_safe_remove_yes_hint(inputs)
});
