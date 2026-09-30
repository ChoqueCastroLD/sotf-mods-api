/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Preflight_Changelog_MissingInputs */

const en_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No changelog: followers like to know what changed.`)
};

const es_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin registro de cambios: a los seguidores les gusta saber qué cambió.`)
};

const de_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kein Änderungsprotokoll: Follower wollen wissen, was sich geändert hat.`)
};

const fr_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas de journal : les abonnés aiment savoir ce qui a changé.`)
};

const it_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun registro delle modifiche: i follower vogliono sapere cosa è cambiato.`)
};

const nl_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen wijzigingslog: volgers willen weten wat er veranderd is.`)
};

const pl_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak listy zmian: obserwujący chcą wiedzieć, co się zmieniło.`)
};

const pt_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem registro de mudanças: os seguidores gostam de saber o que mudou.`)
};

const ru_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет списка изменений: подписчикам интересно, что поменялось.`)
};

const sv_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen ändringslogg: följare vill veta vad som ändrats.`)
};

const tr_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik günlüğü yok: takipçiler neyin değiştiğini bilmek ister.`)
};

const zh_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有更新日志：关注者想知道改了什么。`)
};

const ja_upload_preflight_changelog_missing = /** @type {(inputs: Upload_Preflight_Changelog_MissingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`変更履歴がありません。フォロワーは何が変わったか知りたがっています。`)
};

/**
* | output |
* | --- |
* | "No changelog: followers like to know what changed." |
*
* @param {Upload_Preflight_Changelog_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_preflight_changelog_missing = /** @type {((inputs?: Upload_Preflight_Changelog_MissingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Changelog_MissingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_preflight_changelog_missing(inputs)
	if (locale === "de") return de_upload_preflight_changelog_missing(inputs)
	if (locale === "fr") return fr_upload_preflight_changelog_missing(inputs)
	if (locale === "it") return it_upload_preflight_changelog_missing(inputs)
	if (locale === "nl") return nl_upload_preflight_changelog_missing(inputs)
	if (locale === "pl") return pl_upload_preflight_changelog_missing(inputs)
	if (locale === "pt") return pt_upload_preflight_changelog_missing(inputs)
	if (locale === "ru") return ru_upload_preflight_changelog_missing(inputs)
	if (locale === "sv") return sv_upload_preflight_changelog_missing(inputs)
	if (locale === "tr") return tr_upload_preflight_changelog_missing(inputs)
	if (locale === "zh") return zh_upload_preflight_changelog_missing(inputs)
	if (locale === "ja") return ja_upload_preflight_changelog_missing(inputs)
	return en_upload_preflight_changelog_missing(inputs)
});
