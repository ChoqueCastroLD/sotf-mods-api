/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_Empty_TextInputs */

const en_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tap ♥ on a mod to follow it and get notified about its updates.`)
};

const es_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pulsa ♥ en un mod para seguirlo y recibir notificaciones de sus actualizaciones.`)
};

const de_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tippe bei einem Mod auf ♥, um ihm zu folgen und über seine Updates benachrichtigt zu werden.`)
};

const fr_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Touchez ♥ sur un mod pour le suivre et être prévenu de ses mises à jour.`)
};

const it_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tocca ♥ su una mod per seguirla e ricevere notifiche sui suoi aggiornamenti.`)
};

const nl_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tik op ♥ bij een mod om hem te volgen en meldingen over updates te krijgen.`)
};

const pl_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stuknij ♥ przy modzie, aby go obserwować i dostawać powiadomienia o jego aktualizacjach.`)
};

const pt_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toque em ♥ em um mod para segui-lo e receber notificações das atualizações.`)
};

const ru_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нажмите ♥ у мода, чтобы подписаться на него и получать уведомления об обновлениях.`)
};

const sv_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryck på ♥ på en modd för att följa den och få aviseringar om uppdateringar.`)
};

const tr_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu takip edip güncellemelerinden haberdar olmak için ♥ simgesine dokun.`)
};

const zh_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在模组上点 ♥ 即可关注，并收到它的更新通知。`)
};

const ja_me_backpack_empty_text = /** @type {(inputs: Me_Backpack_Empty_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODの ♥ をタップするとフォローでき、アップデートの通知が届きます。`)
};

/**
* | output |
* | --- |
* | "Tap ♥ on a mod to follow it and get notified about its updates." |
*
* @param {Me_Backpack_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_empty_text = /** @type {((inputs?: Me_Backpack_Empty_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Empty_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_empty_text(inputs)
	if (locale === "de") return de_me_backpack_empty_text(inputs)
	if (locale === "fr") return fr_me_backpack_empty_text(inputs)
	if (locale === "it") return it_me_backpack_empty_text(inputs)
	if (locale === "nl") return nl_me_backpack_empty_text(inputs)
	if (locale === "pl") return pl_me_backpack_empty_text(inputs)
	if (locale === "pt") return pt_me_backpack_empty_text(inputs)
	if (locale === "ru") return ru_me_backpack_empty_text(inputs)
	if (locale === "sv") return sv_me_backpack_empty_text(inputs)
	if (locale === "tr") return tr_me_backpack_empty_text(inputs)
	if (locale === "zh") return zh_me_backpack_empty_text(inputs)
	if (locale === "ja") return ja_me_backpack_empty_text(inputs)
	return en_me_backpack_empty_text(inputs)
});
