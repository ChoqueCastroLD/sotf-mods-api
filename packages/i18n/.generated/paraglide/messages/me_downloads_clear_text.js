/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Downloads_Clear_TextInputs */

const en_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Every row disappears and «Did it work?» questions about past downloads go away. Download counts of the mods are not affected. This can’t be undone.`)
};

const es_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaparecen todas las filas y las preguntas «¿Funcionó?» sobre descargas pasadas. Los contadores de descargas de los mods no cambian. No se puede deshacer.`)
};

const de_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Zeilen verschwinden und die Fragen „Hat es funktioniert?“ zu früheren Downloads entfallen. Die Download-Zähler der Mods bleiben unverändert. Das lässt sich nicht rückgängig machen.`)
};

const fr_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les lignes disparaissent, ainsi que les questions « Ça a marché ? » sur vos anciens téléchargements. Les compteurs de téléchargements des mods ne changent pas. Cette action est irréversible.`)
};

const it_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spariscono tutte le righe e le domande «Ha funzionato?» sui download passati. I contatori dei download delle mod non cambiano. Non si può annullare.`)
};

const nl_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle regels verdwijnen, net als de vragen ‘Werkte het?’ over eerdere downloads. De downloadtellers van de mods veranderen niet. Dit kan niet ongedaan worden gemaakt.`)
};

const pl_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Znikną wszystkie wiersze i pytania „Zadziałało?” o wcześniejsze pobrania. Liczniki pobrań modów się nie zmienią. Tego nie można cofnąć.`)
};

const pt_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as linhas somem, junto com as perguntas “Funcionou?” sobre downloads antigos. Os contadores de downloads dos mods não mudam. Não dá para desfazer.`)
};

const ru_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все строки исчезнут, как и вопросы «Заработало?» о прошлых загрузках. Счётчики загрузок модов не изменятся. Это действие нельзя отменить.`)
};

const sv_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla rader försvinner, liksom frågorna ”Fungerade det?” om tidigare nedladdningar. Moddarnas nedladdningsräknare påverkas inte. Det går inte att ångra.`)
};

const tr_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm satırlar ve eski indirmelerle ilgili “Çalıştı mı?” soruları kaybolur. Modların indirme sayaçları değişmez. Bu işlem geri alınamaz.`)
};

const zh_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有条目以及关于以往下载的“能用吗？”提问都会消失。模组的下载计数不受影响。此操作无法撤销。`)
};

const ja_me_downloads_clear_text = /** @type {(inputs: Me_Downloads_Clear_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての行と、過去のダウンロードについての「動きましたか？」の質問が消えます。MODのダウンロード数は変わりません。この操作は元に戻せません。`)
};

/**
* | output |
* | --- |
* | "Every row disappears and «Did it work?» questions about past downloads go away. Download counts of the mods are not affected. This can’t be undone." |
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
