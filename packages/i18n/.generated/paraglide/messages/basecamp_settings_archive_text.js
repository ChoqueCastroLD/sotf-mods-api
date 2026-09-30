/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Settings_Archive_TextInputs */

const en_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`It stays reachable with an «archived» notice. Pick a successor to send players to your new mod.`)
};

const es_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue accesible con un aviso de «archivado». Elige un sucesor para llevar a los jugadores a tu nuevo mod.`)
};

const de_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er bleibt mit einem Hinweis «archiviert» erreichbar. Wähle einen Nachfolger, um Spieler zu deinem neuen Mod zu schicken.`)
};

const fr_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il reste accessible avec une mention « archivé ». Choisissez un successeur pour envoyer les joueurs vers votre nouveau mod.`)
};

const it_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resta raggiungibile con un avviso «archiviata». Scegli un successore per portare i giocatori alla tua nuova mod.`)
};

const nl_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hij blijft bereikbaar met de melding «gearchiveerd». Kies een opvolger om spelers naar je nieuwe mod te sturen.`)
};

const pl_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pozostanie dostępny z informacją „zarchiwizowany”. Wybierz następcę, aby kierować graczy do nowego moda.`)
};

const pt_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua acessível com um aviso de “arquivado”. Escolha um sucessor para levar os jogadores ao seu novo mod.`)
};

const ru_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод останется доступен с пометкой «в архиве». Выберите преемника, чтобы направлять игроков к новому моду.`)
};

const sv_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den förblir nåbar med meddelandet ”arkiverad”. Välj en efterföljare för att skicka spelare till din nya mod.`)
};

const tr_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“Arşivlendi” uyarısıyla erişilebilir kalır. Oyuncuları yeni moduna yönlendirmek için bir halef seç.`)
};

const zh_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`它仍可访问，并带有“已归档”提示。选择一个后继模组，引导玩家前往你的新模组。`)
};

const ja_basecamp_settings_archive_text = /** @type {(inputs: Basecamp_Settings_Archive_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`「アーカイブ済み」の表示付きでアクセスできます。後継を選ぶと、プレイヤーを新しい MOD へ案内できます。`)
};

/**
* | output |
* | --- |
* | "It stays reachable with an «archived» notice. Pick a successor to send players to your new mod." |
*
* @param {Basecamp_Settings_Archive_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_settings_archive_text = /** @type {((inputs?: Basecamp_Settings_Archive_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Archive_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_settings_archive_text(inputs)
	if (locale === "de") return de_basecamp_settings_archive_text(inputs)
	if (locale === "fr") return fr_basecamp_settings_archive_text(inputs)
	if (locale === "it") return it_basecamp_settings_archive_text(inputs)
	if (locale === "nl") return nl_basecamp_settings_archive_text(inputs)
	if (locale === "pl") return pl_basecamp_settings_archive_text(inputs)
	if (locale === "pt") return pt_basecamp_settings_archive_text(inputs)
	if (locale === "ru") return ru_basecamp_settings_archive_text(inputs)
	if (locale === "sv") return sv_basecamp_settings_archive_text(inputs)
	if (locale === "tr") return tr_basecamp_settings_archive_text(inputs)
	if (locale === "zh") return zh_basecamp_settings_archive_text(inputs)
	if (locale === "ja") return ja_basecamp_settings_archive_text(inputs)
	return en_basecamp_settings_archive_text(inputs)
});
