/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Clear_TextInputs */

const en_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every row disappears. Download counts of the mods are not affected. This can’t be undone.`)
};

const es_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaparecen todas las filas. Los contadores de descargas de los mods no cambian. No se puede deshacer.`)
};

const de_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Zeilen verschwinden. Die Download-Zähler der Mods bleiben unverändert. Das lässt sich nicht rückgängig machen.`)
};

const fr_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les lignes disparaissent. Les compteurs de téléchargements des mods ne changent pas. Cette action est irréversible.`)
};

const it_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spariscono tutte le righe. I contatori dei download delle mod non cambiano. Non si può annullare.`)
};

const nl_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle regels verdwijnen. De downloadtellers van de mods veranderen niet. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znikną wszystkie wiersze. Liczniki pobrań modów się nie zmienią. Tego nie można cofnąć.`)
};

const pt_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as linhas somem. Os contadores de downloads dos mods não mudam. Não dá para desfazer.`)
};

const ru_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все строки исчезнут. Счётчики загрузок модов не изменятся. Это действие нельзя отменить.`)
};

const sv_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla rader försvinner. Moddarnas nedladdningsräknare påverkas inte. Det går inte att ångra.`)
};

const tr_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm satırlar kaybolur. Modların indirme sayaçları değişmez. Bu işlem geri alınamaz.`)
};

const zh_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有条目都会消失。模组的下载计数不受影响。此操作无法撤销。`)
};

const ja_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての行が消えます。MODのダウンロード数は変わりません。この操作は元に戻せません。`)
};

/**
* | output |
* | --- |
* | "Every row disappears. Download counts of the mods are not affected. This can’t be undone." |
*
* @param {Me_Downloads_Clear_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_downloads_clear_text = /** @type {((inputs?: Me_Downloads_Clear_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_Clear_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_downloads_clear_text(inputs)
	if (locale === "de") return de_me_downloads_clear_text(inputs)
	if (locale === "fr") return fr_me_downloads_clear_text(inputs)
	if (locale === "it") return it_me_downloads_clear_text(inputs)
	if (locale === "nl") return nl_me_downloads_clear_text(inputs)
	if (locale === "pl") return pl_me_downloads_clear_text(inputs)
	if (locale === "pt") return pt_me_downloads_clear_text(inputs)
	if (locale === "ru") return ru_me_downloads_clear_text(inputs)
	if (locale === "sv") return sv_me_downloads_clear_text(inputs)
	if (locale === "tr") return tr_me_downloads_clear_text(inputs)
	if (locale === "zh") return zh_me_downloads_clear_text(inputs)
	if (locale === "ja") return ja_me_downloads_clear_text(inputs)
	return en_me_downloads_clear_text(inputs)
});
