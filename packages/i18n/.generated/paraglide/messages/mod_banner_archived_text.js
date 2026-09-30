/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Banner_Archived_TextInputs */

const en_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creator no longer maintains this mod. It may not work on the current patch.`)
};

const es_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El creador ya no mantiene este mod. Puede que no funcione en el parche actual.`)
};

const de_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Ersteller pflegt diesen Mod nicht mehr. Er funktioniert eventuell nicht mit dem aktuellen Patch.`)
};

const fr_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le créateur ne maintient plus ce mod. Il peut ne pas fonctionner avec le patch actuel.`)
};

const it_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il creatore non mantiene più questa mod. Potrebbe non funzionare con la patch attuale.`)
};

const nl_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De maker onderhoudt deze mod niet meer. Misschien werkt hij niet op de huidige patch.`)
};

const pl_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca już nie rozwija tego moda. Może nie działać z obecną łatką.`)
};

const pt_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O criador não mantém mais este mod. Ele pode não funcionar no patch atual.`)
};

const ru_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор больше не поддерживает этот мод. Он может не работать на текущем патче.`)
};

const sv_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparen underhåller inte längre den här moden. Den kanske inte fungerar med den aktuella patchen.`)
};

const tr_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı artık bu modu geliştirmiyor. Güncel yamada çalışmayabilir.`)
};

const zh_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者已不再维护此模组，它可能无法在当前补丁下运行。`)
};

const ja_mod_banner_archived_text = /** @type {(inputs: Mod_Banner_Archived_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者はこの MOD の更新を終了しました。現在のパッチでは動かない可能性があります。`)
};

/**
* | output |
* | --- |
* | "The creator no longer maintains this mod. It may not work on the current patch." |
*
* @param {Mod_Banner_Archived_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_banner_archived_text = /** @type {((inputs?: Mod_Banner_Archived_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Archived_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_banner_archived_text(inputs)
	if (locale === "de") return de_mod_banner_archived_text(inputs)
	if (locale === "fr") return fr_mod_banner_archived_text(inputs)
	if (locale === "it") return it_mod_banner_archived_text(inputs)
	if (locale === "nl") return nl_mod_banner_archived_text(inputs)
	if (locale === "pl") return pl_mod_banner_archived_text(inputs)
	if (locale === "pt") return pt_mod_banner_archived_text(inputs)
	if (locale === "ru") return ru_mod_banner_archived_text(inputs)
	if (locale === "sv") return sv_mod_banner_archived_text(inputs)
	if (locale === "tr") return tr_mod_banner_archived_text(inputs)
	if (locale === "zh") return zh_mod_banner_archived_text(inputs)
	if (locale === "ja") return ja_mod_banner_archived_text(inputs)
	return en_mod_banner_archived_text(inputs)
});
